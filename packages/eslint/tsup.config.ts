import { getOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getOptions("cjs", options),
	bundle: true,
	entry: ["source/index.ts"],
	shims: true,
}));
