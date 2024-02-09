import {
	JAVASCRIPT_EXTENSIONS,
	TYPESCRIPT_EXTENSIONS,
} from "@terminal-nerds/utils-config/extensions";

const extensions = [
	...JAVASCRIPT_EXTENSIONS,
	...TYPESCRIPT_EXTENSIONS,
] as const;

export const ESLINT = {
	[`*.{${extensions.join(",")}}`]: ["eslint"],
} as const;
