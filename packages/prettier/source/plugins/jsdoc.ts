/** {@link https://github.com/hosseinmd/prettier-plugin-jsdoc} */
const config = {
	plugins: ["prettier-plugin-jsdoc"],

	jsdocParser: true,
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
	tsdoc: true,
	jsdocLineWrappingStyle: "greedy",
};

export default config;
