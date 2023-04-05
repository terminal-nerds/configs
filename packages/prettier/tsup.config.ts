import { getNodeCJSOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getNodeCJSOptions(options),
	bundle: true,
	entry: ["source/index.ts"],
	noExternal: ["@terminal-nerds/snippets-runtime/module", "@terminal-nerds/snippets-runtime/variable"],
}));
