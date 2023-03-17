import { getNodeUniveralOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getNodeUniveralOptions(options),
	entry: ["source/*.ts"],
}));
