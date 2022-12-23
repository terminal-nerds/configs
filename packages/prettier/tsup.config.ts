import { defineConfig } from "tsup";

export default defineConfig({
	dts: true,
	clean: true,
	entry: ["source/**/*.ts"],
	format: ["cjs"],
	minify: true,
	noExternal: ["@workspace/shared"],
	sourcemap: true,
	splitting: false,
	target: ["node16"],
	treeshake: true,
});
