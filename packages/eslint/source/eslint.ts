import { MAX_LINE_LENGTH, TABS_WIDTH } from "@terminal-nerds/constants-config";
import { defineConfig } from "eslint-define-config";

const config = defineConfig({
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	ignorePatterns: [
		// Unignore files starting with dot (usually configuration files)
		"!.*",
		// Ignore...
		"**/.git",
		"**/.husky",
		"**/.turbo",
		"**/.vercel",
		"**/build",
		"**/dist",
		"**/node_modules",
		"**/package-lock.json",
		"**/pnpm-lock.yaml",
	],

	extends: ["eslint:recommended"],

	rules: {
		// RATIONALE:
		// Adjust to adapted code format and stop screaming on lines
		// that aren't too long yet.
		"max-len": [
			"warn",
			{
				code: MAX_LINE_LENGTH + 20,
				tabWidth: TABS_WIDTH,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],

		// RATIONALE: Remind developers about possible logs that aren't
		// supposed to be there.
		"no-console": ["warn", { allow: ["debug"] }],

		// RATIONALE:
		// Obviously, the functions should have name as to explain
		// their intention. Code readability.
		"func-names": ["error", "as-needed"],
	},
});

export default config;
