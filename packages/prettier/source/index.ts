import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import prettierDefault from "./prettier.js";
import pluginSvelte from "./extensions/svelte.js";

const configurations = deepmerge(prettierDefault, {
	...(hasModule("svelte") && pluginSvelte),
});

// eslint-disable-next-line unicorn/prefer-module
module.exports = configurations;
