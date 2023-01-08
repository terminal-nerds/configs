import { MARKDOWN_EXTENSIONS } from "@workspace/shared/extension";

export const MARKDOWN = {
	[`*.{${MARKDOWN_EXTENSIONS.join(",")}}`]: ["markdownlint"],
} as const;
