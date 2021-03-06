import { createMergedConfig } from "@workspace/helpers/configuration";
import { hasModule } from "@workspace/helpers/module";

import stylelint from "./stylelint.js";

import configPrettier from "./configs/prettier.js";
import configStandard from "./configs/standard.js";
import configStandardSCSS from "./configs/standard-scss.js";

import pluginHighPerformanceAnimations from "./plugins/high-performance-animations.js";
import pluginNoUnsupportedBrowserFeatures from "./plugins/no-unsupported-browser-features.js";
import pluginOrder from "./plugins/order";
import pluginSCSS from "./plugins/scss.js";

const mergedConfig = createMergedConfig([
	// Base
	stylelint,

	// Plugins
	pluginHighPerformanceAnimations,
	pluginNoUnsupportedBrowserFeatures,
	pluginOrder,
	hasModule("sass") && pluginSCSS,

	// Configurations
	!hasModule("sass") && configStandard,
	hasModule("sass") && configStandardSCSS,
	// NOTE: Must come as last!
	hasModule("prettier") && configPrettier,
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = mergedConfig;
