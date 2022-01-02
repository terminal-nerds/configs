import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import eslintDefault from "./eslint";
import pluginTypeScript from "./plugins/typescript";

const configurations = deepmerge(eslintDefault, {
	...(hasModule("typescript") && pluginTypeScript),
});

module.exports = configurations;
