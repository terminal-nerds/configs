import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	bundle: true,
	clean: true,
	dts: true,
	entry: ["source/*.ts"],
	format: ["cjs", "esm"],
	minify: true,
	noExternal: ["find-up", "locate-path", "read-pkg", "read-pkg-up"],
	outDir: "dist/",
	shims: true,
	skipNodeModulesBundle: true,
	sourcemap: true,
	splitting: false,
	treeshake: true,
}));
