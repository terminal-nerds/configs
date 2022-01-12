/* eslint-disable @typescript-eslint/no-var-requires */
import { deepmerge } from "deepmerge-ts";

// This is a workaround for https://github.com/eslint/eslint/issues/3458
import "@rushstack/eslint-patch/modern-module-resolution";

const configurations = deepmerge(
	require("./eslint").default,
	require("./plugins/typescript").default,
	require("./plugins/compat").default,
	require("./plugins/diff").default,
	require("./plugins/import").default,
	require("./plugins/jsonc").default,
	require("./plugins/json-schema-validator").default,
	require("./plugins/node").default,
	require("./plugins/regexp").default,
	require("./plugins/sonarjs").default,
	require("./plugins/svelte3").default,
	require("./plugins/unicorn").default,
	require("./plugins/yml").default,
	// NOTE: Must come as last!
	require("./configs/prettier").default,
);

module.exports = configurations;
