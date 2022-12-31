import { defineConfig } from "tsup";

import { dependencies } from "./package.json";

export default defineConfig({
	bundle: true,
	dts: true,
	clean: true,
	entry: ["source/index.ts"],
	external: Object.keys(dependencies),
	noExternal: ["@workspace/shared"],
	format: ["cjs"],
	minify: true,
	sourcemap: true,
	splitting: false,
	target: ["node16"],
	treeshake: true,
});
