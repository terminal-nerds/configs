import { STYLESHEETS_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema";

export const STYLESHEETS = {
	[`*.{${STYLESHEETS_EXTENSIONS.join(",")}}`]: ["stylelint"],
} as const;
