import { createMergedConfig } from "@workspace/shared/configuration";
import { hasPackage } from "@workspace/shared/package";

import pluginSvelte from "./plugins/svelte.js";
import prettier from "./prettier.js";

const config = createMergedConfig([
	// Base
	prettier,

	// Plugins
	hasPackage("svelte") && pluginSvelte,
]);

// eslint-disable-next-line unicorn/prefer-module
export default config;
