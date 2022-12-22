import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import pluginSvelte from "./plugins/svelte";
import prettier from "./prettier.js";

const mergedConfig = createMergedConfig([
	// Base
	prettier,

	// Plugins
	hasModule("svelte") && pluginSvelte,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
