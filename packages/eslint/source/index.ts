// This is a workaround for https://github.com/eslint/eslint/issues/3458
import "@rushstack/eslint-patch/modern-module-resolution";

import { createMergedConfig } from "@workspace/helpers/configuration";
import { isContinuousIntegration } from "@workspace/helpers/environment";
import { hasModule } from "@workspace/helpers/module";

import eslint from "./eslint.js";

import pluginCompat from "./plugins/compat.js";
import pluginDiff from "./plugins/diff.js";
import pluginImport from "./plugins/import.js";
import pluginJestDOM from "./plugins/jest-dom.js";
import pluginJSONC from "./plugins/jsonc.js";
import pluginJSONSchemaValidator from "./plugins/json-schema-validator.js";
import pluginJSXA11y from "./plugins/jsx-a11y.js";
import pluginNode from "./plugins/node.js";
import pluginSonarJS from "./plugins/sonarjs.js";
import pluginReact from "./plugins/react.js";
import pluginReactHooks from "./plugins/react-hooks.js";
import pluginRegexp from "./plugins/regexp.js";
import pluginStorybook from "./plugins/storybook.js";
import pluginSvelte3 from "./plugins/svelte3.js";
import pluginTestingLibrary from "./plugins/testing-library.js";
import pluginTypeScript from "./plugins/typescript.js";
import pluginUnicorn from "./plugins/unicorn.js";
import pluginYML from "./plugins/yml.js";

import configNext from "./configs/next.js";
import configPrettier from "./configs/prettier.js";

const mergedConfig = createMergedConfig([
	// Base
	eslint,

	// Plugins
	pluginCompat,
	isContinuousIntegration() && pluginDiff,
	pluginImport,
	hasModule("@testing-library/jest-dom") && pluginJestDOM,
	pluginJSONC,
	pluginJSONSchemaValidator,
	(hasModule("react") || hasModule("preact")) && pluginJSXA11y,
	pluginNode,
	(hasModule("react") || hasModule("preact")) && pluginReact,
	(hasModule("react") || hasModule("preact")) && pluginReactHooks,
	pluginRegexp,
	pluginSonarJS,
	hasModule("sb") && pluginStorybook,
	hasModule("svelte") && pluginSvelte3,
	hasModule("@testing-library/jest-dom") && pluginTestingLibrary,
	hasModule("typescript") && pluginTypeScript,
	pluginUnicorn,
	pluginYML,

	// Configs
	// NOTE: Must come as last!
	hasModule("next") && configNext,
	hasModule("prettier") && configPrettier,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
