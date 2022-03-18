import { defineConfig } from "eslint-define-config";

// https://github.com/mysticatea/eslint-plugin-node
const config = defineConfig({
	extends: ["plugin:react-hooks/recommended"],
});

export default config;
