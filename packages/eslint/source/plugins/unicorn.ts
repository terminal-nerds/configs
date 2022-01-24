import { defineConfig } from "eslint-define-config";

import { isESModule } from "@workspace/helpers/module";

// https://github.com/sindresorhus/eslint-plugin-unicorn
const config = defineConfig({
	extends: ["plugin:unicorn/recommended"],
	rules: {
		"unicorn/filename-case": ["off"], // Use `ls-lint` instead
	}
});

export default isESModule() ? config : {};
