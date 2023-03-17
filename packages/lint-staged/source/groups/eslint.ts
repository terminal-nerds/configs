import {
	JAVASCRIPT_EXTENSIONS,
	JSON_EXTENSIONS,
	TYPESCRIPT_EXTENSIONS,
	YAML_EXTENSIONS,
} from "@terminal-nerds/snippets-extension/schema";

const extensions = [
	...JSON_EXTENSIONS,
	...JAVASCRIPT_EXTENSIONS,
	...TYPESCRIPT_EXTENSIONS,
	...YAML_EXTENSIONS,
] as const;

export const ESLINT = {
	[`*.{${extensions.join(",")}}`]: ["eslint"],
} as const;
