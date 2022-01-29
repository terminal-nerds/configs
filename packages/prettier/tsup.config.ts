import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	entry: ["source/index.ts"],
	format: ["cjs"],
	minify: true,
	noExternal: ["@workspace/helpers"],
	sourcemap: true,
	splitting: false,
	target: ["node16"],
});
