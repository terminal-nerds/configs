import { createMergedConfig } from "@workspace/shared/configuration";
import type { Config } from "stylelint";

import { HAS_PRETTIER, HAS_SASS } from "./checks.js";
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
	HAS_SASS && pluginSCSS,

	// Configurations
	!HAS_SASS && configStandard,
	HAS_SASS && configStandardSCSS,
	// NOTE: Must come as last!
	HAS_PRETTIER && configPrettier,
]);

export default config;
