import {
	JAVASCRIPT_EXTENSIONS,
	JSON_EXTENTSIONS,
	TYPESCRIPT_EXTENSIONS,
	YAML_EXTENSIONS,
} from "@workspace/shared/extension";

const extensions = [
	...JSON_EXTENTSIONS,
	...JAVASCRIPT_EXTENSIONS,
	...TYPESCRIPT_EXTENSIONS,
	...YAML_EXTENSIONS,
] as const;

export const ESLINT = {
	[`*.{${extensions.join(",")}}`]: ["eslint"],
} as const;
