import { deepmerge } from "deepmerge-ts";

import prettier from "./prettier.js";
import pluginSvelte from "./plugins/svelte";

const configurations = deepmerge(
	prettier,

	pluginSvelte,
);

module.exports = configurations;
