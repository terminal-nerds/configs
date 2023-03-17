import { END_OF_LINE, INDENT, MAX_LINE_LENGTH, QUOTES, TABS_WIDTH } from "@terminal-nerds/constants-config";
import type { Options } from "prettier";

/** @see {@link https://prettier.io/docs/en/options.html} Prettier Options */
const config: Options = {
	printWidth: MAX_LINE_LENGTH,

	tabWidth: TABS_WIDTH,
	useTabs: INDENT === "tabs",

	singleQuote: QUOTES !== "double",
	quoteProps: "consistent",

	semi: true,
	trailingComma: "all",

	bracketSpacing: true,
	arrowParens: "always",

	rangeStart: 0,
	rangeEnd: Number.POSITIVE_INFINITY,

	endOfLine: END_OF_LINE,
} as const;

export default config;
