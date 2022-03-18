import { defineConfig } from "eslint-define-config";

// https://github.com/mysticatea/eslint-plugin-node
const config = defineConfig({
	extends: ["plugin:jsx-a11y/recommended"],
});

export default config;
