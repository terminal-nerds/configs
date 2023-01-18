import { defineConfig } from "tsup";

import { getNodeUniveralOptions } from "./source/main.js";

export default defineConfig((options) => ({
	...getNodeUniveralOptions(options),
	entry: ["./source/**/*.ts"],
	minify: false,
}));
