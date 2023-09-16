import {
	JAVASCRIPT_EXTENSIONS,
	TYPESCRIPT_EXTENSIONS,
} from "@terminal-nerds/snippets-extension/schema";

const extensions = [
	...JAVASCRIPT_EXTENSIONS,
	...TYPESCRIPT_EXTENSIONS,
] as const;

export const TESTS = {
	[`*.{${extensions.join(",")}}`]: ["vitest related --run"],
} as const;
