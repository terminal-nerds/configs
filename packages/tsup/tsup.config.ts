import { defineConfig } from "tsup";

import { getNodeUniveralOptions } from "./source/main.ts";

export default defineConfig((options) => ({
	...getNodeUniveralOptions(options),
	entry: ["./source/**/*.ts"],
}));
