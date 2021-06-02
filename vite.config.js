import viteImagemin from "vite-plugin-imagemin";
import { resolve } from "path";

import { svgLoader } from "./custom_plugins/svg_loader/index.js";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        content: resolve(__dirname, "./template_pages/content/index.html"),
      },
    },
  },
  plugins: [
    svgLoader(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
  ],
};
