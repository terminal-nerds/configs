import { createMergedConfig } from "@terminal-nerds/utils-config/merge-configs";
import type { ESLintConfig } from "eslint-define-config";

import {
	HAS_DOCUSAURUS,
	HAS_DRIZZLE,
	HAS_JEST,
	HAS_JEST_DOM,
	HAS_NEXT,
	HAS_PRETTIER,
	HAS_REACT,
	HAS_STORYBOOK,
	HAS_SVELTE,
	HAS_TAILWINDCSS,
	HAS_TYPESCRIPT,
	HAS_UNOCSS,
} from "./checks.ts";
import configNext from "./configs/next.ts";
import configPrettier from "./configs/prettier.ts";
import configUnoCSS from "./configs/unocss.ts";
import eslint from "./eslint.ts";
import pluginCompat from "./plugins/compat.ts";
import pluginDiff from "./plugins/diff.ts";
import plugindocusaurus from "./plugins/docusaurus.ts";
import pluginDrizzle from "./plugins/drizzle.ts";
import pluginEmotion from "./plugins/emotion.ts";
import pluginESX from "./plugins/es-x.ts";
import pluginImport from "./plugins/import.ts";
import pluginJest from "./plugins/jest.ts";
import pluginJestDOM from "./plugins/jest-dom.ts";
import pluginJestFormatting from "./plugins/jest-formatting.ts";
import pluginJSDoc from "./plugins/jsdoc.ts";
import pluginJSXA11y from "./plugins/jsx-a11y.ts";
import pluginNode from "./plugins/node.ts";
import pluginReact from "./plugins/react.ts";
import pluginReactHooks from "./plugins/react-hooks.ts";
import pluginRegexp from "./plugins/regexp.ts";
import pluginSimpleImportSort from "./plugins/simple-import-sort.ts";
import pluginSonarJS from "./plugins/sonarjs.ts";
import pluginSQL from "./plugins/sql.ts";
import pluginStorybook from "./plugins/storybook.ts";
import pluginSvelte from "./plugins/svelte.ts";
import pluginTailwindCSS from "./plugins/tailwindcss.ts";
import pluginTestingLibrary from "./plugins/testing-library.ts";
import pluginTypeScript from "./plugins/typescript.ts";
import pluginTypeScriptCompat from "./plugins/typescript-compat.ts";
import pluginUnicorn from "./plugins/unicorn.ts";

const config = createMergedConfig<ESLintConfig>([
	// Base
	eslint,

	// Plugins
	pluginCompat,
	process.env["ESLINT_PLUGIN_DIFF_ENABLE"] === "true" && pluginDiff,
	HAS_DOCUSAURUS && plugindocusaurus,
	HAS_DRIZZLE && pluginDrizzle,
	HAS_REACT && pluginEmotion,
	pluginESX,
	pluginImport,
	HAS_JEST && pluginJest,
	HAS_JEST_DOM && pluginJestDOM,
	HAS_JEST && pluginJestFormatting,
	pluginJSDoc,
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
	HAS_TYPESCRIPT && pluginTypeScript,
	HAS_TYPESCRIPT && pluginTypeScriptCompat,
	pluginUnicorn,

	// Configs
	HAS_UNOCSS && configUnoCSS,
	HAS_NEXT && configNext,
	// NOTE: Must come as last!
	HAS_PRETTIER && configPrettier,
]);

export default config;
