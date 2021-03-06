//@ts-ignore
import { getExtractedSVG } from "svg-inline-loader";
import type { Plugin } from "rollup";
import * as fs from "fs";

export const svgLoader: (options?: {
  classPrefix?: string;
  idPrefix?: string;
  removeSVGTagAttrs?: boolean;
  warnTags?: boolean;
  removeTags?: boolean;
  warnTagAttrs?: boolean;
  removingTagAttrs?: boolean;
}) => Plugin = (options?: {}) => {
  return {
    name: "vite-svg-patch-plugin",
    transform: function (code, id) {
      if (id.endsWith(".svg")) {
        const extractedSvg = fs.readFileSync(id, "utf8");
        return `export default '${getExtractedSVG(extractedSvg, options)}'`;
      }
      return code;
    },
  };
};
