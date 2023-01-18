import { getNodeCJSOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getNodeCJSOptions(options),
	bundle: true,
	entry: ["source/index.ts"],
	external: ["deepmerge-ts", "normalize-package-data", "parse-json"],
	minify: false,
	noExternal: ["@workspace/shared"],
}));
