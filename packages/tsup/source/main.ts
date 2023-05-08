import type { Options } from "tsup";

/**
 * Base configuration to be used across the projects.
 *
 * @deprecated Use `getConfig`
 */
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

/**
 * Optimal configuration for building component(s)
 *
 * @deprecated Use `getConfig("browser")` instead.
 */
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

/**
 * Optimal configuration for building in CommonJS type.
 *
 * @deprecated Use `getConfig("cjs")` instead.
 *
 * @param options
 */
export function getNodeCJSOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["cjs"],
		platform: "node",
		target: "esnext",
		shims: true,
	};
}

/**
 * Optimal configuration for building in ES Module type.
 */
export function getNodeESMOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["esm"],
		platform: "node",
		shims: true,
	};
}

/**
 * Optimal configuration for building in both CommonJS and ES Modules types ()
 *
 * @deprecated Use `getConfig()` or `getConfig("universal")` instead.
 */
export function getNodeUniversalOptions(options: Options): Options {
	return {
		...getBaseOptions(options),
		format: ["cjs", "esm"],
		platform: "node",
		shims: true,
		target: "node18",
	};
}

export type TsupBuildTarget = "cjs" | "esm" | "browser" | "universal";

/**
 * @see {@link https://github.com/egoist/tsup} tsup Repository
 */
export function getOptions(
	target: TsupBuildTarget = "universal",
	options: Options = {}
): Options {
	const { watch } = options;

	return {
		clean: true,
		dts: true,
		format: getFormat(target),
		minify: false,
		outDir: "./dist",
		platform: target === "browser" ? "browser" : "node",
		shims: true,
		sourcemap: !watch,
		splitting: true,
		target: "esnext",
		treeshake: true,
	};
}

function getFormat(target: TsupBuildTarget): NonNullable<Options["format"]> {
	const format: Options["format"] = [];

	if (target === "cjs" || target === "universal") {
		format.push("cjs");
	}

	if (target === "esm" || target === "universal") {
		format.push("esm");
	}

	return format;
}
