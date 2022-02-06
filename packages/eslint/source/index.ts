/* eslint-disable @typescript-eslint/no-var-requires */
import { deepmerge } from "deepmerge-ts";

// This is a workaround for https://github.com/eslint/eslint/issues/3458
import "@rushstack/eslint-patch/modern-module-resolution";

import eslint from "./eslint.js";

import pluginCompat from "./plugins/compat.js";
import pluginDiff from "./plugins/diff.js";
import pluginImport from "./plugins/import.js";
import pluginJSONC from "./plugins/jsonc.js";
import pluginJSONSchemaValidator from "./plugins/json-schema-validator.js";
import pluginNode from "./plugins/node.js";
import pluginSonarJS from "./plugins/sonarjs.js";
import pluginStorybook from "./plugins/storybook.js";
import pluginSvelte3 from "./plugins/svelte3.js";
import pluginTypeScript from "./plugins/typescript.js";
import pluginUnicorn from "./plugins/unicorn.js";
import pluginYML from "./plugins/yml.js";

import configPrettier from "./configs/prettier.js";

const configurations = deepmerge(
	eslint,

	pluginCompat,
	pluginDiff,
	pluginImport,
	pluginJSONC,
	pluginJSONSchemaValidator,
	pluginNode,
	pluginSonarJS,
	pluginStorybook,
	pluginSvelte3,
	pluginTypeScript,
	pluginUnicorn,
	pluginYML,

	// NOTE: Must come as last!
	configPrettier,
);

// eslint-disable-next-line unicorn/prefer-module
module.exports = configurations;
