import { hasModule } from "@terminal-nerds/snippets-runtime/module";
import { getEnvironmentVariable } from "@terminal-nerds/snippets-runtime/variable";

export const HAS_SVELTE = hasModule("svelte");
export const HAS_TAILWINDCSS = hasModule("tailwindcss");
export const HAS_TYPESCRIPT = hasModule("typescript");

export type DocumentationType = "jsdoc" | "tsdoc";
export const DOCUMENTATION_TYPE = getEnvironmentVariable<DocumentationType>("DOCUMENTATION_TYPE");
