import { STYLESHEETS_EXTENSIONS } from "@workspace/shared/extension";

export const STYLESHEETS = {
	[`*.{${STYLESHEETS_EXTENSIONS.join(",")}}`]: ["stylelint"],
} as const;
