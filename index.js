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
import vm, { Script } from "node:vm";

const require = createRequire(import.meta.url);

import { JSDOM } from "jsdom";
import rehype from "rehype";

export function spectroscope(
  /** @type {{ selector?: string; filter?: (elem: Element) => boolean; } | undefined} */ opts,
) {
  return (
    /** @type {import("unist").Node} */ tree,
    /** @type {import("vfile").VFile} */ file,
  ) => {
    const jsdom = new JSDOM(rehype().stringify(tree), {
      runScripts: "dangerously",
    });
    const ctx = jsdom.getInternalVMContext();

    new vm.Script(
      "window.Prism = window.Prism || {}; window.Prism.manual = true;",
    ).runInContext(ctx);

    new vm.Script(
      fs.readFileSync(require.resolve("prismjs/prism.js"), {
        encoding: "utf-8",
      }),
    ).runInContext(ctx);

    // new vm.Script(
    //   fs.readFileSync(
    //     require.resolve("prismjs/plugins/autoloader/prism-autoloader.js"),
    //     {
    //       encoding: "utf-8",
    //     },
    //   ),
    // ).runInContext(ctx);

    new vm.Script("Prism.highlightAll();").runInContext(ctx);

    return rehype().parse(jsdom.serialize());
  };
}
