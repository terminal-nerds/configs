import { createMergedConfig } from "@workspace/shared/configuration";

import { HAS_SVELTE, HAS_TAILWINDCSS } from "./checks.js";
import pluginSvelte from "./plugins/svelte.js";
import pluginTailwindCSS from "./plugins/tailwindcss.js";
import prettier from "./prettier.js";

const config = createMergedConfig([
	// Base
	prettier,

	// Plugins
	HAS_SVELTE && pluginSvelte,
	HAS_TAILWINDCSS && pluginTailwindCSS,
]);

export default config;
