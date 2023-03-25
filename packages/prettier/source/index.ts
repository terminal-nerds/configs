import { createMergedConfig } from "@terminal-nerds/snippets-config/merge";

import { HAS_SVELTE, HAS_TAILWINDCSS } from "./checks.ts";
// eslint-disable-next-line unicorn/prevent-abbreviations
import pluginJSDoc from "./plugins/jsdoc.ts";
import pluginSortMarkdownTable from "./plugins/sort-markdown-table.ts";
import pluginSvelte from "./plugins/svelte.ts";
import pluginTailwindCSS from "./plugins/tailwindcss.ts";
import prettier from "./prettier.ts";

const config = createMergedConfig([
	// Base
	prettier,

	// Plugins
	pluginJSDoc,
	pluginSortMarkdownTable,
	HAS_SVELTE && pluginSvelte,
	HAS_TAILWINDCSS && pluginTailwindCSS,
]);

export default config;
