import { STYLESHEETS_EXTENSIONS } from "@terminal-nerds/utils-config/extensions";

export const STYLESHEETS = {
	[`*.{${STYLESHEETS_EXTENSIONS.join(",")}}`]: ["stylelint"],
} as const;
