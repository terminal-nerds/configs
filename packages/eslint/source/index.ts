import { createMergedConfig } from "@workspace/shared/configuration";
import type { ESLintConfig } from "eslint-define-config";

import {
	HAS_DOCUSAURUS,
	HAS_JEST,
	HAS_JEST_DOM,
	HAS_NEXT,
	HAS_PRETTIER,
	HAS_REACT,
	HAS_STORYBOOK,
	HAS_SVELTE,
	HAS_TAILWINDCSS,
	HAS_TYPESCRIPT,
} from "./checks.js";
import configNext from "./configs/next.js";
import configPrettier from "./configs/prettier.js";
import eslint from "./eslint.js";
import pluginCompat from "./plugins/compat.js";
import pluginDiff from "./plugins/diff.js";
import plugindocusaurus from "./plugins/docusaurus.js";
import pluginEmotion from "./plugins/emotion.js";
import pluginImport from "./plugins/import.js";
import pluginJest from "./plugins/jest.js";
import pluginJestDOM from "./plugins/jest-dom.js";
import pluginJestFormatting from "./plugins/jest-formatting.js";
import pluginJSDoc from "./plugins/jsdoc.js";
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
import pluginTSDoc from "./plugins/tsdoc.js";
import pluginTypeScript from "./plugins/typescript.js";
import pluginUnicorn from "./plugins/unicorn.js";
import pluginYML from "./plugins/yml.js";

type SimplifiedESLintConfig = Pick<ESLintConfig, keyof ESLintConfig>;

const config = createMergedConfig<SimplifiedESLintConfig>([
	// Base
	eslint,

	// Plugins
	pluginCompat,
	process.env["ESLINT_PLUGIN_DIFF_ENABLE"] === "true" && pluginDiff,
	HAS_DOCUSAURUS && plugindocusaurus,
	HAS_REACT && pluginEmotion,
	pluginImport,
	HAS_JEST && pluginJest,
	HAS_JEST_DOM && pluginJestDOM,
	HAS_JEST && pluginJestFormatting,
	pluginJSDoc,
	pluginJSONC,
	pluginJSONSchemaValidator,
	HAS_REACT && pluginJSXA11y,
	pluginNode,
	HAS_REACT && pluginReact,
	HAS_REACT && pluginReactHooks,
	pluginRegexp,
	pluginSimpleImportSort,
	pluginSonarJS,
	pluginSQL,
	HAS_STORYBOOK && pluginStorybook,
	HAS_SVELTE && pluginSvelte,
	HAS_JEST_DOM && pluginTestingLibrary,
	HAS_TAILWINDCSS && pluginTailwindCSS,
	HAS_TYPESCRIPT && pluginTSDoc,
	HAS_TYPESCRIPT && pluginTypeScript,
	pluginUnicorn,
	pluginYML,

	// Configs
	HAS_NEXT && configNext,
	// NOTE: Must come as last!
	HAS_PRETTIER && configPrettier,
]);

export default config;
