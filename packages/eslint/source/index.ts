import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import eslintDefault from "./eslint";
import configPrettier from "./configs/prettier";
import pluginCompat from "./plugins/compat";
import pluginImport from "./plugins/import";
import pluginJSONC from "./plugins/jsonc";
import pluginJSONSchemaValidator from "./plugins/json-schema-validator";
import pluginNode from "./plugins/node";
import pluginRegExp from "./plugins/regexp";
import pluginSonarJS from "./plugins/sonarjs";
import pluginTypeScript from "./plugins/typescript";
import pluginUnicorn from "./plugins/unicorn";
import pluginYML from "./plugins/yml";

const configurations = deepmerge(
	eslintDefault,
	{ ...(hasModule("typescript") && pluginTypeScript) },
	pluginCompat,
	pluginImport,
	pluginJSONC,
	pluginJSONSchemaValidator,
	pluginNode,
	pluginRegExp,
	pluginSonarJS,
	pluginUnicorn,
	pluginYML,
	configPrettier,
);

// eslint-disable-next-line unicorn/prefer-module
module.exports = configurations;
