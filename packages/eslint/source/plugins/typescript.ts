import { defineConfig } from "eslint-define-config";

// https://github.com/typescript-eslint/typescript-eslint
const config = defineConfig({
	extends: ["plugin:@typescript-eslint/recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		// project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
});

export default config;
