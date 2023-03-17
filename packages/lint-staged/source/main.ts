import {
	HAS_DEPCHECK,
	HAS_ESLINT,
	HAS_MARKDOWNLINT_CLI,
	HAS_PRETTIER,
	HAS_STYLELINT,
	HAS_SYNCPACK,
	HAS_TYPESCRIPT,
	HAS_VITEST,
} from "./checks.js";
import { CODE_FORMAT } from "./groups/code-format.js";
import { ESLINT } from "./groups/eslint.js";
import { MARKDOWN } from "./groups/markdown.js";
import { PACKAGE_JSON } from "./groups/package-json.js";
import { STYLESHEETS } from "./groups/stylesheets.js";
import { TESTS } from "./groups/tests.js";
import { TYPESCRIPT } from "./groups/typescript.js";

/** {@link https://github.com/okonet/lint-staged#configuration} */
export const CONFIG = {
	...(HAS_PRETTIER && CODE_FORMAT),
	...(HAS_ESLINT && ESLINT),
	...(HAS_MARKDOWNLINT_CLI && MARKDOWN),
	...((HAS_DEPCHECK || HAS_SYNCPACK) && PACKAGE_JSON),
	...(HAS_STYLELINT && STYLESHEETS),
	...(HAS_TYPESCRIPT && TYPESCRIPT),
	...(HAS_VITEST && TESTS),
};
