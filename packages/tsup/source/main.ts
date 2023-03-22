import type { Options } from "tsup";

/** Base configuration to be used across the projects */
export function getBaseOptions(options: Options): Options {
	const { watch } = options;

	return {
		clean: true,
		dts: true,
		minify: !watch,
		outDir: "./dist",
		sourcemap: !watch,
		splitting: false,
		target: "esnext",
		treeshake: true,
	};
}

/** Optimal configuration for building component(s) */
export function getComponentOptions(options: Options): Options {
	const { watch } = options;

	return {
		...getBaseOptions(options),
		entry: [
			/* prettier-ignore */
			"./source/**/*.ts",
			"./source/**/*.tsx",
			"./source/**/*[!spec|stories|test].tsx",
		],
		format: ["esm"],
		platform: "browser",
		splitting: !watch,
		treeshake: !watch,
	};
}

/** Optimal configuration for building in CommonJS type */
export function getNodeCJSOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["cjs"],
		platform: "node",
		target: "node18",
		shims: true,
	};
}

/** Optimal configuration for building in ES Module type */
export function getNodeESMOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["esm"],
		platform: "node",
		shims: true,
	};
}

/** Optimal configuration for building in both CommonJS and ES Modules types () */
export function getNodeUniversalOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["cjs", "esm"],
		platform: "node",
		shims: true,
		target: "node18",
	};
}
