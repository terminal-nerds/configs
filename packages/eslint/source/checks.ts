import { hasModule } from "@terminal-nerds/utils-config/has-module";

export const HAS_DOCUSAURUS = hasModule("@docusaurus/core");
export const HAS_DRIZZLE = hasModule("drizzle-orm");
export const HAS_EMOTION =
	hasModule("@emotion/css") || hasModule("@emotion/react");
export const HAS_JEST = hasModule("jest") || hasModule("vitest");
export const HAS_JEST_DOM = hasModule("@testing-library/jest-dom");
export const HAS_NEXT = hasModule("next");
export const HAS_PRETTIER = hasModule("prettier");
export const HAS_REACT = hasModule("preact") || hasModule("react");
export const HAS_STORYBOOK = hasModule("storybook");
export const HAS_SVELTE = hasModule("svelte");
export const HAS_TAILWINDCSS = hasModule("tailwindcss");
export const HAS_TYPESCRIPT = hasModule("typescript");
export const HAS_UNOCSS = hasModule("unocss");

export const IS_IN_CI =
	process.env["CI"] === "true" ||
	process.env["CONTINUOUS_INTEGRATION"] === "true";

export type DocumentationType = "jsdoc" | "tsdoc";
export const DOCUMENTATION_TYPE = process.env["DOCUMENTATION_TYPE"] as
	| DocumentationType
	| undefined;
