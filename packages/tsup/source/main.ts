import type { Options } from "tsup";

export type TsupBuildTarget = "cjs" | "esm" | "browser" | "universal";

/**
 * @param target  - Predefinied name for the build target.
 * @param options - Tsup options.
 * @see {@link https://github.com/egoist/tsup} tsup Repository
 */
export function getOptions(
	target: TsupBuildTarget = "universal",
	options: Options = {},
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
