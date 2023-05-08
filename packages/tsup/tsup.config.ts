import { defineConfig } from "tsup";

import { getOptions } from "./source/main.ts";

export default defineConfig((options) => ({
	...getOptions("esm", options),
	entry: ["./source/**/*.ts"],
}));
