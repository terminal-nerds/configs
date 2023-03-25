import { HAS_TYPESCRIPT } from "../checks.ts";

/** {@link https://github.com/hosseinmd/prettier-plugin-jsdoc} Plugin JSDoc options */
const config = {
	plugins: ["prettier-plugin-jsdoc"],

	/**
	 * FIXME: Enable it once this issue is resolved, because is hard to work with it:
	 * https://github.com/hosseinmd/prettier-plugin-jsdoc/issues/183
	 */
	jsdocParser: !HAS_TYPESCRIPT,
	jsdocSpaces: 1,
	// jsdocPrintWidth: number,
	jsdocDescriptionWithDot: false,
	jsdocDescriptionTag: false,
	jsdocVerticalAlignment: false,
	jsdocKeepUnParseAbleExampleIndent: false,
	jsdocSingleLineComment: true,
	jsdocSeparateReturnsFromParam: true,
	jsdocSeparateTagGroups: true,
	jsdocAddDefaultToDescription: true,
	jsdocCapitalizeDescription: true,
	jsdocPreferCodeFences: true,
	jsdocLineWrappingStyle: "greedy",
	tsdoc: HAS_TYPESCRIPT,
} as const;

export default config;
