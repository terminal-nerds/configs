import { createMergedConfig } from "@workspace/shared/configuration";
import { hasPackage } from "@workspace/shared/package";

import pluginSvelte from "./plugins/svelte.js";
import pluginTailwindCSS from "./plugins/tailwindcss.js";
import prettier from "./prettier.js";

const config = createMergedConfig([
	// Base
	prettier,

	// Plugins
	hasPackage("svelte") && pluginSvelte,
	hasPackage("tailwindcss") && pluginTailwindCSS,
]);

export default config;
