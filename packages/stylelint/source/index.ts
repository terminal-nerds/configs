import { createMergedConfig } from "@workspace/shared/configuration";
import { hasPackage } from "@workspace/shared/package";
import type { Config } from "stylelint";

import configPrettier from "./configs/prettier.js";
import configStandard from "./configs/standard.js";
import configStandardSCSS from "./configs/standard-scss.js";
import pluginHighPerformanceAnimations from "./plugins/high-performance-animations.js";
import pluginNoUnsupportedBrowserFeatures from "./plugins/no-unsupported-browser-features.js";
import pluginOrder from "./plugins/order/index.js";
import pluginSCSS from "./plugins/scss.js";
import stylelint from "./stylelint.js";

const config = createMergedConfig<Config>([
	// Base
	stylelint,

	// Plugins
	pluginHighPerformanceAnimations,
	pluginNoUnsupportedBrowserFeatures,
	pluginOrder,
	hasPackage("sass") && pluginSCSS,

	// Configurations
	!hasPackage("sass") && configStandard,
	hasPackage("sass") && configStandardSCSS,
	// NOTE: Must come as last!
	hasPackage("prettier") && configPrettier,
]);

export default config;
