import { defineConfig } from "eslint-define-config";

// https://github.com/sindresorhus/eslint-plugin-unicorn
const config = defineConfig({
	extends: ["plugin:unicorn/recommended"],
	rules: {
		// RATIONALE: Use `ls-lint` instead.
		"unicorn/filename-case": ["off"],

		// RATIONALE: Warn about it, is not an error.
		"unicorn/prevent-abbreviations": ["warn"],
	},
});

export default config;
