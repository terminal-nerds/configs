import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import prettier from "./prettier.js";

import pluginSvelte from "./plugins/svelte";

const mergedConfig = createMergedConfig([
	// Base
	prettier,

	// Plugins
	hasModule("svelte") && pluginSvelte,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
