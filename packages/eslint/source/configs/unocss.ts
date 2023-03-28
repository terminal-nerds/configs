import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/unocss/unocss/tree/main/packages/eslint-config} Config repository */
const config = defineConfig({
	extends: ["@unocss"],
});

export default config;
