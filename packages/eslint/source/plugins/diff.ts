import { defineConfig } from "eslint-define-config";

import { isContinuousIntegration } from "@workspace/helpers";

// https://github.com/paleite/eslint-plugin-diff
const config = defineConfig({
	extends: ["plugin:diff/diff"],
});

export default isContinuousIntegration() ? config : {};
