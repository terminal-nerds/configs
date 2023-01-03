import { createMergedConfig } from "@workspace/shared/configuration";
import { isContinuousIntegration } from "@workspace/shared/environment";
import { hasPackage } from "@workspace/shared/package";
import type { ESLintConfig } from "eslint-define-config";

import configNext from "./configs/next.js";
import configPrettier from "./configs/prettier.js";
import eslint from "./eslint.js";
import pluginCompat from "./plugins/compat.js";
import pluginDiff from "./plugins/diff.js";
import pluginEmotion from "./plugins/emotion.js";
import pluginImport from "./plugins/import.js";
import pluginJest from "./plugins/jest.js";
import pluginJestDOM from "./plugins/jest-dom.js";
import pluginJestFormatting from "./plugins/jest-formatting.js";
import pluginJSONSchemaValidator from "./plugins/json-schema-validator.js";
import pluginJSONC from "./plugins/jsonc.js";
import pluginJSXA11y from "./plugins/jsx-a11y.js";
import pluginNode from "./plugins/node.js";
import pluginReact from "./plugins/react.js";
import pluginReactHooks from "./plugins/react-hooks.js";
import pluginRegexp from "./plugins/regexp.js";
import pluginSimpleImportSort from "./plugins/simple-import-sort.js";
import pluginSonarJS from "./plugins/sonarjs.js";
import pluginSQL from "./plugins/sql.js";
import pluginStorybook from "./plugins/storybook.js";
import pluginSvelte from "./plugins/svelte.js";
import pluginTailwindCSS from "./plugins/tailwindcss.js";
import pluginTestingLibrary from "./plugins/testing-library.js";
import pluginTypeScript from "./plugins/typescript.js";
import pluginUnicorn from "./plugins/unicorn.js";
import pluginYML from "./plugins/yml.js";

type SimplifiedESLintConfig = Pick<ESLintConfig, keyof ESLintConfig>;

const config = createMergedConfig<SimplifiedESLintConfig>([
	// Base
	eslint,

	// Plugins
	pluginCompat,
	isContinuousIntegration() && pluginDiff,
	(hasPackage("@emotion/css") || hasPackage("@emotion/react")) && pluginEmotion,
	pluginImport,
	(hasPackage("jest") || hasPackage("vitest")) && pluginJest,
	hasPackage("@testing-library/jest-dom") && pluginJestDOM,
	(hasPackage("jest") || hasPackage("vitest")) && pluginJestFormatting,
	pluginJSONC,
	pluginJSONSchemaValidator,
	(hasPackage("react") || hasPackage("preact")) && pluginJSXA11y,
	pluginNode,
	(hasPackage("react") || hasPackage("preact")) && pluginReact,
	(hasPackage("react") || hasPackage("preact")) && pluginReactHooks,
	pluginRegexp,
	pluginSimpleImportSort,
	pluginSonarJS,
	pluginSQL,
	hasPackage("storybook") && pluginStorybook,
	hasPackage("svelte") && pluginSvelte,
	hasPackage("@testing-library/jest-dom") && pluginTestingLibrary,
	hasPackage("tailwindcss") && pluginTailwindCSS,
	hasPackage("typescript") && pluginTypeScript,
	pluginUnicorn,
	pluginYML,

	// Configs
	hasPackage("next") && configNext,
	// NOTE: Must come as last!
	hasPackage("prettier") && configPrettier,
]);

export default config;
