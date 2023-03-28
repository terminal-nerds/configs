import { defineConfig } from "eslint-define-config";

const ALLOWED_ABBREVATIONS = [
	/** RATIONALE: This is descriptive & obvious enough. */
	"args",
	"Args",
	/** RATIONALE: This is descriptive & obvious enough. */
	"params",
	"Params",
	/** RATIONALE: This is descriptive & obvious enough. */
	"props",
	"Props",
	/** RATIONALE: Every React developer knows what is it, no need to make it more obvious. */
	"ref",
	"Ref",
	/** RATIONALE: Those are official names */
	"jsdoc",
	"JSDoc",
	"tsdoc",
	"TSDoc",
	/** RATIONALE: This is descriptive & obvious enough */
	"env",
	"Env",
	"ENV",
];

// https://github.com/sindresorhus/eslint-plugin-unicorn
const config = defineConfig({
	extends: ["plugin:unicorn/recommended"],
	rules: {
		/** RATIONALE: Use `ls-lint` instead. */
		"unicorn/filename-case": ["off"],

		/** RATIONALE: Warn about it, is not an bug, just a code readability issue. */
		"unicorn/prevent-abbreviations": ["warn", { ignore: ALLOWED_ABBREVATIONS }],
	},
});

export default config;
