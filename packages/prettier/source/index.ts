import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import prettierDefault from "./prettier.js";
import pluginSvelte from "./extensions/svelte.js";

const configurations = deepmerge(prettierDefault, {
	...hasModule("svelte") && pluginSvelte,
});

module.exports = configurations;
