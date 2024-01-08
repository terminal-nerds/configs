import { defineConfig } from "eslint-define-config";

/** @see {@link https://github.com/drizzle-team/drizzle-orm/tree/main/eslint-plugin-drizzle} Plugin repo */
const config = defineConfig({
	plugins: ["drizzle"],
	extends: ["plugin:drizzle/recommended"],
});

export default config;
