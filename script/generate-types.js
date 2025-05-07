// @ts-check

// $ node script/generate-types.js

import fs from "node:fs";

const prismLanguages = fs
  .readdirSync("node_modules/prismjs/components")
  .filter((lang) => /^prism-.*\.js$/.test(lang))
  .filter((lang) => !/\.min\.js$/.test(lang))
  .map((lang) => lang.replace(/^prism-(.*)\.js$/, "$1"))
  .map((lang) => `"${lang}"`);
const prismLanguagesTypedef =
  "/**\n * @typedef {" +
  prismLanguages.join("\n *           | ") +
  "} PrismLanguage\n */";
const prismLanguagesFn = `/**
 * @param {string} lang
 * @returns {lang is PrismLanguage}
 */
export function isPrismLanguage(lang) {
  return [\n    ${prismLanguages.join(",\n    ")},\n  ].includes(lang);
}`;

const prismPlugins = fs
  .readdirSync("node_modules/prismjs/plugins", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .filter((dirent) => {
    const pluginFile = `node_modules/prismjs/plugins/${dirent.name}/prism-${dirent.name}.js`;
    return fs.existsSync(pluginFile);
  })
  .map((dirent) => `"${dirent.name}"`);
const prismPluginsTypedef =
  "/**\n * @typedef {" +
  prismPlugins.join("\n *           | ") +
  "} PrismPlugin\n */";
const prismPluginsFn = `/**
 * @param {string} plugin
 * @returns {plugin is PrismPlugin}
 */
export function isPrismPlugin(plugin) {
  return [\n    ${prismPlugins.join(",\n    ")},\n  ].includes(plugin);
}`;

fs.writeFileSync(
  "prism-types.js",
  [
    prismLanguagesTypedef,
    prismLanguagesFn,
    prismPluginsTypedef,
    prismPluginsFn,
  ].join("\n") + "\n",
  { encoding: "utf-8" },
);
