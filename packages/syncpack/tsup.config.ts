import { defineConfig } from "tsup";

export default defineConfig({
	bundle: false,
	dts: true,
	clean: true,
	entry: ["source/index.ts"],
	noExternal: ["@workspace/shared"],
	format: ["cjs"],
	minify: true,
	sourcemap: true,
	splitting: false,
	target: ["node16"],
	treeshake: true,
});
