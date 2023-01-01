import { getNodeCJSOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

import { dependencies } from "./package.json";

export default defineConfig((options) => ({
	...getNodeCJSOptions(options),
	bundle: true,
	entry: ["source/index.ts"],
	external: Object.keys(dependencies),
	noExternal: ["@workspace/shared"],
}));
