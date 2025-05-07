// @ts-check

import { spectroscope } from "@u1f992/rehype-spectroscope";

import { VFM } from "@vivliostyle/vfm";
// import { concentrator } from "@u1f992/rehype-concentrator";

/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  title: "example",
  author: "u1f992",
  theme: "./css",
  entry: ["manuscript.md"],
  documentProcessor: (opts, meta) =>
    VFM(opts, meta)
      // .use(concentrator)
      .use(spectroscope, {
        languages: ["c", "css", "typescript"],
        plugins: ["line-numbers"],
      }),
};

export default vivliostyleConfig;
