import {
	HAS_DEPCHECK,
	HAS_ESLINT,
	HAS_MARKDOWNLINT_CLI,
	HAS_PRETTIER,
	HAS_STYLELINT,
	HAS_SYNCPACK,
	HAS_TYPESCRIPT,
	HAS_VITEST,
} from "./checks.ts";
import { CODE_FORMAT } from "./groups/code-format.ts";
import { ESLINT } from "./groups/eslint.ts";
import { MARKDOWN } from "./groups/markdown.ts";
import { PACKAGE_JSON } from "./groups/package-json.ts";
import { STYLESHEETS } from "./groups/stylesheets.ts";
import { TESTS } from "./groups/tests.ts";
import { TYPESCRIPT } from "./groups/typescript.ts";

/** {@link https://github.com/okonet/lint-staged#configuration} */
export const CONFIG = {
	...(HAS_PRETTIER && CODE_FORMAT),
	...(HAS_ESLINT && ESLINT),
	...(HAS_MARKDOWNLINT_CLI && MARKDOWN),
	...((HAS_DEPCHECK || HAS_SYNCPACK) && PACKAGE_JSON),
	...(HAS_STYLELINT && STYLESHEETS),
	...(HAS_TYPESCRIPT && TYPESCRIPT),
	...(HAS_VITEST && TESTS),
} as const;
