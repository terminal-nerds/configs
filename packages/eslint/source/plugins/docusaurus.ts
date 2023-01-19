import { defineConfig } from "eslint-define-config";

// https://github.com/facebook/docusaurus/tree/main/packages/eslint-plugin
const config = defineConfig({
	extends: ["plugin:@docusaurus/recommended"],
});

export default config;
