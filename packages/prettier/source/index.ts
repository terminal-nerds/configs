import { createMergedConfig } from "@terminal-nerds/utils-config/merge-configs";

import pluginJSDoc from "./plugins/jsdoc.ts";
import { HAS_ASTRO, HAS_SVELTE, HAS_TAILWINDCSS } from "./checks.ts";
import pluginAstro from "./plugins/astro.ts";
import pluginSvelte from "./plugins/svelte.ts";
import pluginTailwindCSS from "./plugins/tailwindcss.ts";
import prettier from "./prettier.ts";

const config = createMergedConfig([
	// Base
	prettier,

	// Plugins
	pluginJSDoc,
	HAS_ASTRO && pluginAstro,
	HAS_SVELTE && pluginSvelte,
	HAS_TAILWINDCSS && pluginTailwindCSS,
]);

export default config;
