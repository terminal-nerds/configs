import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import stylelintDefault from "./stylelint";
import configPrettier from "./configs/prettier";
import configStandard from "./configs/standard";
import configStandardSCSS from "./configs/standard-scss";
import pluginSCSS from "./plugins/scss";

const configurations = deepmerge(
	stylelintDefault,
	{ ...(hasModule("scss") ? configStandardSCSS : configStandard) },
	{ ...(hasModule("scss") && pluginSCSS) },
	// NOTE: Must come as last!
	configPrettier,
);

// eslint-disable-next-line unicorn/prefer-module
module.exports = configurations;
