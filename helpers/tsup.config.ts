import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	entry: ["source/*.ts"],
	format: ["esm"],
	minify: true,
	outDir: "build/",
	sourcemap: true,
	splitting: true,
	target: ["node16"],
});
