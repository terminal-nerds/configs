import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import eslintDefault from "./eslint";
import pluginJSONC from "./plugins/jsonc";
import pluginYML from "./plugins/yml";
import pluginTypeScript from "./plugins/typescript";

const configurations = deepmerge(eslintDefault, pluginJSONC, pluginYML, {
	...(hasModule("typescript") && pluginTypeScript),
});

module.exports = configurations;
