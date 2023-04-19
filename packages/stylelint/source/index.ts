import { createMergedConfig } from "@terminal-nerds/snippets-config/merge";
import type { Config } from "stylelint";

import { HAS_PRETTIER, HAS_SASS } from "./checks.ts";
import configPrettier from "./configs/prettier.ts";
import configStandard from "./configs/standard.ts";
import configStandardSCSS from "./configs/standard-scss.ts";
import pluginHighPerformanceAnimations from "./plugins/high-performance-animations.ts";
import pluginNoUnsupportedBrowserFeatures from "./plugins/no-unsupported-browser-features.ts";
import pluginOrder from "./plugins/order/index.ts";
import pluginSCSS from "./plugins/scss.ts";
import stylelint from "./stylelint.ts";

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
