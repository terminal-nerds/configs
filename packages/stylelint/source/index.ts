import { deepmerge } from "deepmerge-ts";

import stylelint from "./stylelint.js";

import configPrettier from "./configs/prettier.js";
import configStandard from "./configs/standard.js";
import configStandardSCSS from "./configs/standard-scss.js";

import pluginHighPerformanceAnimations from "./plugins/high-performance-animations.js";
import pluginNoUnsupportedBrowserFeatures from "./plugins/no-unsupported-browser-features.js";
import pluginOrder from "./plugins/order.js";
import pluginSCSS from "./plugins/scss.js";

const configurations = deepmerge(
	stylelint,

	configStandard,
	configStandardSCSS,

	pluginHighPerformanceAnimations,
	pluginNoUnsupportedBrowserFeatures,
	pluginOrder,
	pluginSCSS,

	// NOTE: Must come as last!
	configPrettier,
);

module.exports = configurations;
