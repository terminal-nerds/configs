import { MARKDOWN_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema";

export const MARKDOWN = {
	[`*.{${MARKDOWN_EXTENSIONS.join(",")}}`]: ["markdownlint"],
} as const;
