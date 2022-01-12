import { deepmerge } from "deepmerge-ts";

const configurations = deepmerge(
	require("./stylelint").default,
	require("./config/standard").default,
	require("./config/standard-scss").default,
	require("./plugins/high-performance-animations").default,
	require("./plugins/no-unsupported-browser-features").default,
	require("./plugins/order").default,
	require("./plugins/scss").default,
	// NOTE: Must come as last!
	require("./config/prettier").default,
);

module.exports = configurations;
