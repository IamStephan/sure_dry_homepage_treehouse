"use strict";
exports.__esModule = true;
exports.svgLoader = void 0;
//@ts-ignore
var svg_inline_loader_1 = require("svg-inline-loader");
var fs = require("fs");
var svgLoader = function (options) {
    return {
        name: "vite-svg-patch-plugin",
        transform: function (code, id) {
            if (id.endsWith(".svg")) {
                var extractedSvg = fs.readFileSync(id, "utf8");
                return "export default '" + svg_inline_loader_1.getExtractedSVG(extractedSvg, options) + "'";
            }
            return code;
        }
    };
};
exports.svgLoader = svgLoader;
