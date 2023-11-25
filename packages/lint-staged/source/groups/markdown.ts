import { MARKDOWN_EXTENSIONS } from "@terminal-nerds/utils-config/extensions";

export const MARKDOWN = {
	[`*.{${MARKDOWN_EXTENSIONS.join(",")}}`]: ["markdownlint"],
} as const;
