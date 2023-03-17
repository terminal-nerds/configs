import { getNodeCJSOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getNodeCJSOptions(options),
	entry: ["source/index.ts"],
}));
