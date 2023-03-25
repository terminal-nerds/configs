import { COGNITIVE_COMPLEXITY } from "@terminal-nerds/constants-config";
import { defineConfig } from "eslint-define-config";

// https://github.com/SonarSource/eslint-plugin-sonarjs
const config = defineConfig({
	extends: ["plugin:sonarjs/recommended"],
	plugins: ["sonarjs"],
	rules: {
		"sonarjs/cognitive-complexity": ["warn", COGNITIVE_COMPLEXITY],
	},
});

export default config;
