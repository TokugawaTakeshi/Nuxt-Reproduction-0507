import { NuxtConfig } from "@nuxt/types";
import Path from "path";
import { NuxtBabelPresetEnv, NuxtWebpackEnv } from "@nuxt/types/config/build";


const Config: NuxtConfig = {

  buildDir: "Build/InteractiveImplementation",

  dir: {
    pages: "Pages",
    layouts: "Layouts",
    store: "Store",
    assets: "Assets"
  },

  alias: {
    "@Utils": Path.resolve(__dirname, "Utils")
  },

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxt/postcss8"
  ],

  build: {
    babel: {
      presets(_test: NuxtBabelPresetEnv & NuxtWebpackEnv, [ , options ]: [ string, unknown ]): void {
        (options as { loose: boolean; }).loose = true;
      }
    }
  },

  telemetry: false,

  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}"
      }
    }
  }
};


export default Config;
