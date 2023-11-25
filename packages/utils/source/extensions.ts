import { z } from "zod";

export const HTML_EXTENSIONS = ["html", "htm"] as const;
export type HTMLExtension = (typeof HTML_EXTENSIONS)[number];
export const HTML_EXTENSION_SCHEMA = z.enum(HTML_EXTENSIONS);

export function isHTMLExtension(extension: string): extension is HTMLExtension {
	return HTML_EXTENSION_SCHEMA.safeParse(extension).success;
}

export const JAVASCRIPT_EXTENSIONS = ["cjs", "js", "mjs"] as const;
export type JavaScriptExtension = (typeof JAVASCRIPT_EXTENSIONS)[number];
export const JAVASCRIPT_EXTENSION_SCHEMA = z.enum(JAVASCRIPT_EXTENSIONS);

export function isJavaScriptExtension(
	extension: string,
): extension is JavaScriptExtension {
	return JAVASCRIPT_EXTENSION_SCHEMA.safeParse(extension).success;
}

export const JSON_EXTENSIONS = ["json", "json5", "jsonc"] as const;
export type JSONExtension = (typeof JSON_EXTENSIONS)[number];
export const JSON_EXTENSION_SCHEMA = z.enum(JSON_EXTENSIONS);

export function isJSONExtension(extension: string): extension is JSONExtension {
	return JSON_EXTENSION_SCHEMA.safeParse(extension).success;
}

export const MARKDOWN_EXTENSIONS = ["md", "mdx"] as const;
export type MarkdownExtension = (typeof MARKDOWN_EXTENSIONS)[number];
export const MARKDOWN_EXTENSION_SCHEMA = z.enum(MARKDOWN_EXTENSIONS);

export function isMarkdownExtension(
	extension: string,
): extension is MarkdownExtension {
	return MARKDOWN_EXTENSION_SCHEMA.safeParse(extension).success;
}

export const STYLESHEETS_EXTENSIONS = ["css", "sass", "scss"] as const;
export type StylesheetExtension = (typeof STYLESHEETS_EXTENSIONS)[number];
export const STYLESHEET_EXTENSION_SCHEMA = z.enum(STYLESHEETS_EXTENSIONS);

export function isStylesheetExtension(
	extension: string,
): extension is StylesheetExtension {
	return STYLESHEET_EXTENSION_SCHEMA.safeParse(extension).success;
}

export const TYPESCRIPT_EXTENSIONS = ["cts", "ts", "mts"] as const;
export type TypeScriptExtension = (typeof TYPESCRIPT_EXTENSIONS)[number];
export const TYPESCRIPT_EXTENSION_SCHEMA = z.enum(TYPESCRIPT_EXTENSIONS);

export function isTypeScriptExtension(
	extension: string,
): extension is TypeScriptExtension {
	return TYPESCRIPT_EXTENSION_SCHEMA.safeParse(extension).success;
}

export const UI_LIBRARY_EXTENSIONS = [
	"astro",
	"jsx",
	"tsx",
	"svelte",
	"vue",
] as const;
export type UILibraryExtension = (typeof UI_LIBRARY_EXTENSIONS)[number];
export const UI_LIBRARY_EXTENSION_SCHEMA = z.enum(UI_LIBRARY_EXTENSIONS);

export function isUILibraryExtension(
	extension: string,
): extension is UILibraryExtension {
	return UI_LIBRARY_EXTENSION_SCHEMA.safeParse(extension).success;
}

export const YAML_EXTENSIONS = ["yml", "yaml"] as const;
export type YAMLExtension = (typeof YAML_EXTENSIONS)[number];
export const YAML_EXTENSION_SCHEMA = z.enum(YAML_EXTENSIONS);

export function isYAMLExtension(extension: string): extension is YAMLExtension {
	return YAML_EXTENSION_SCHEMA.safeParse(extension).success;
}
