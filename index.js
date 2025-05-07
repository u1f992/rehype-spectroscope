// @ts-check

/*
 * Copyright (C) 2025  Koutaro Mukai
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import fs from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";

const require = createRequire(import.meta.url);

import { JSDOM } from "jsdom";
import rehype from "rehype";

import { isPrismLanguage, isPrismPlugin } from "./prism-types.js";

/**
 * @param {vm.Context} ctx
 * @param {string} moduleName
 */
function runModule(ctx, moduleName) {
  const resolvedPath = require.resolve(moduleName);
  const moduleContent = fs.readFileSync(resolvedPath, { encoding: "utf-8" });
  const script = new vm.Script(moduleContent);
  return script.runInContext(ctx);
}

/**
 * @param {string} htmlContent
 * @return {import("./prism-types.js").PrismLanguage[]}
 */
function getAutoloadedLanguages(htmlContent) {
  const jsdom = new JSDOM(htmlContent, { runScripts: "dangerously" });
  const ctx = jsdom.getInternalVMContext();

  new vm.Script(
    "window.Prism = window.Prism || {}; window.Prism.manual = true;",
  ).runInContext(ctx);
  runModule(ctx, "prismjs/components/prism-core.js");

  /** @type {string[]} */
  const appendedByAutoloader = [];
  ctx["__appendedByAutoloader"] = appendedByAutoloader;
  new vm.Script(`
    /**
     * https://github.com/PrismJS/prism/blob/76dde18a575831c91491895193f56081ac08b0c5/plugins/autoloader/prism-autoloader.js#L344
     */
    const __document_body_appendChild = document.body.appendChild.bind(
      document.body,
    );
    document.body.appendChild = (node) =>
      node.tagName.toLowerCase() === "script" && __appendedByAutoloader.includes(node.src)
        ? node
        : __document_body_appendChild(node);

    /**
     * https://github.com/PrismJS/prism/blob/76dde18a575831c91491895193f56081ac08b0c5/plugins/autoloader/prism-autoloader.js#L333
     */
    const __document_createElement = document.createElement.bind(document);
    document.createElement = (tagName, options) => {
      const elem = __document_createElement(tagName, options);
      if (tagName.toLowerCase() !== "script") {
        return elem;
      }

      /**
       * https://github.com/PrismJS/prism/blob/76dde18a575831c91491895193f56081ac08b0c5/plugins/autoloader/prism-autoloader.js#L334
       */
      const elemProto = Object.getPrototypeOf(elem);
      const elemSrc = Object.getOwnPropertyDescriptor(elemProto, "src");
      Object.defineProperty(elem, "src", {
        set(value) {
          __appendedByAutoloader.push(value);
          if (elemSrc && elemSrc.set) {
            elemSrc.set.call(this, value);
          } else {
            this.setAttribute("src", value);
          }
        },
        get() {
          if (elemSrc && elemSrc.get) {
            return elemSrc.get.call(this);
          }
          return this.getAttribute("src");
        },
        configurable: true,
        enumerable: true,
      });
      return elem;
    };
  `).runInContext(ctx);

  runModule(ctx, `prismjs/plugins/autoloader/prism-autoloader.js`);

  new vm.Script("Prism.highlightAll();").runInContext(ctx);

  return appendedByAutoloader.map((rawLang) => {
    const lang = rawLang.replace(/components\/prism-(.*)\.min\.js/, "$1");
    if (!isPrismLanguage(lang)) {
      throw new Error(`Invalid Prism language: ${lang}`);
    }
    return lang;
  });
}

/**
 * @param {vm.Context} ctx
 * @param {import("./prism-types.js").PrismLanguage[]} langs
 */
function loadLanguages(ctx, langs) {
  for (const lang of langs) {
    runModule(ctx, `prismjs/components/prism-${lang}.js`);
  }
}

export function spectroscope(
  /** @type {{ languages?: import("./prism-types.js").PrismLanguage[]; plugins?: import("./prism-types.js").PrismPlugin[]; } | undefined} */ opts,
) {
  return (
    /** @type {import("unist").Node} */ tree,
    /** @type {import("vfile").VFile} */ file,
  ) => {
    const languages = ((opts && opts.languages) || []).map((lang) => {
      if (!isPrismLanguage(lang)) {
        throw new Error(`Invalid Prism language: ${lang}`);
      }
      return lang;
    });
    const plugins = ((opts && opts.plugins) || []).map((plugin) => {
      if (!isPrismPlugin(plugin)) {
        throw new Error(`Invalid Prism plugin: ${plugin}`);
      }
      return plugin;
    });

    const htmlContent = rehype().stringify(tree);
    const jsdom = new JSDOM(htmlContent, { runScripts: "dangerously" });
    const ctx = jsdom.getInternalVMContext();

    getAutoloadedLanguages(htmlContent);

    new vm.Script(
      "window.Prism = window.Prism || {}; window.Prism.manual = true;",
    ).runInContext(ctx);
    runModule(ctx, "prismjs");

    loadLanguages(ctx, languages);

    for (const plugin of plugins) {
      switch (plugin) {
        // Known plugins that do not work well
        case "autoloader":
          {
            const langs = getAutoloadedLanguages(htmlContent);
            loadLanguages(ctx, langs);
          }
          break;
        default:
          runModule(ctx, `prismjs/plugins/${plugin}/prism-${plugin}.js`);
      }
    }

    new vm.Script("Prism.highlightAll();").runInContext(ctx);

    return rehype().parse(jsdom.serialize());
  };
}
