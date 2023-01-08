import { hasPackage } from "@workspace/shared/package";

import { CODE_FORMAT } from "./groups/code-format.js";
import { ESLINT } from "./groups/eslint.js";
import { MARKDOWN } from "./groups/markdown.js";
import { PACKAGE_JSON } from "./groups/package-json.js";
import { STYLESHEETS } from "./groups/stylesheets.js";
import { TYPESCRIPT } from "./groups/typescript.js";

/**
 * @see https://github.com/okonet/lint-staged#configuration
 */
export const CONFIG = {
	...(hasPackage("prettier") && CODE_FORMAT),
	...(hasPackage("eslint") && ESLINT),
	...(hasPackage("markdownlint-cli") && MARKDOWN),
	...((hasPackage("depcheck") || "syncpack") && PACKAGE_JSON),
	...(hasPackage("stylelint") && STYLESHEETS),
	...(hasPackage("typescript") && TYPESCRIPT),
};
