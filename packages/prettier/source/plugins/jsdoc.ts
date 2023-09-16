import { DOCUMENTATION_TYPE, HAS_TYPESCRIPT } from "../checks.ts";

/** {@link https://github.com/hosseinmd/prettier-plugin-jsdoc} Plugin JSDoc options. */
const config = {
	plugins: ["prettier-plugin-jsdoc"],

	/**
	 * FIXME: Be wary of this issue, because is hard to work with it:
	 * https://github.com/hosseinmd/prettier-plugin-jsdoc/issues/183.
	 */
	jsdocSpaces: 1,
	// jsdocPrintWidth: number,
	jsdocDescriptionWithDot: true,
	jsdocDescriptionTag: false,
	jsdocVerticalAlignment: true,
	jsdocKeepUnParseAbleExampleIndent: true,
	jsdocSingleLineComment: true,
	jsdocSeparateReturnsFromParam: true,
	jsdocSeparateTagGroups: false,
	jsdocAddDefaultToDescription: true,
	jsdocCapitalizeDescription: true,
	jsdocPreferCodeFences: true,
	jsdocLineWrappingStyle: "greedy",
	tsdoc: HAS_TYPESCRIPT && DOCUMENTATION_TYPE !== "jsdoc",
} as const;

export default config;
