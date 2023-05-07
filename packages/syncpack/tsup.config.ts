import { getOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getOptions("cjs", options),
	entry: ["source/index.ts"],
}));
