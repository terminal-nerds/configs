import { hasModule } from "@terminal-nerds/utils-config/has-module";

export const HAS_ASTRO = hasModule("astro");
export const HAS_SVELTE = hasModule("svelte");
export const HAS_TAILWINDCSS = hasModule("tailwindcss");
export const HAS_TYPESCRIPT = hasModule("typescript");

export type DocumentationType = "jsdoc" | "tsdoc";
export const DOCUMENTATION_TYPE = process.env["DOCUMENTATION_TYPE"] as
	| DocumentationType
	| undefined;
