import { getOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getOptions("esm", options),
	entry: ["source/index.ts"],
}));
