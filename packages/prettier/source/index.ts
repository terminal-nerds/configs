import { createMergedConfig } from "@workspace/shared/configuration";
import { hasModule } from "@workspace/shared/module";

import pluginSvelte from "./plugins/svelte.js";
import prettier from "./prettier.js";

const config = createMergedConfig([
	// Base
	prettier,

	// Plugins
	hasModule("svelte") && pluginSvelte,
]);

// eslint-disable-next-line unicorn/prefer-module
export default config;
