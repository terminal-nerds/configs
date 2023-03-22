import { defineConfig } from "tsup";

import { getNodeUniversalOptions } from "./source/main.ts";

export default defineConfig((options) => ({
	...getNodeUniversalOptions(options),
	entry: ["./source/**/*.ts"],
}));
