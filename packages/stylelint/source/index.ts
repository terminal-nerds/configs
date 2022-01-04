import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import stylelintDefault from "./stylelint";
import configPrettier from "./configs/prettier";
import configStandard from "./configs/standard";
import configStandardSCSS from "./configs/standard-scss";
import pluginHighPerformanceAnimations from "./plugins/high-performance-animations";
import pluginNoUnsupportedBrowserFeatures from "./plugins/no-unsupported-browser-features";
import pluginOrder from "./plugins/order";
import pluginSCSS from "./plugins/scss";

const configurations = deepmerge(
	stylelintDefault,
	{ ...(hasModule("scss") ? configStandardSCSS : configStandard) },
	pluginHighPerformanceAnimations,
	pluginNoUnsupportedBrowserFeatures,
	pluginOrder,
	{ ...(hasModule("scss") && pluginSCSS) },
	// NOTE: Must come as last!
	configPrettier,
);

// eslint-disable-next-line unicorn/prefer-module
module.exports = configurations;
