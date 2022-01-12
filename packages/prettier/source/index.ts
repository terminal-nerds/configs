import { deepmerge } from "deepmerge-ts";

const configurations = deepmerge(
	require("./prettier").default,
	require("./plugins/svelte").default,
);

module.exports = configurations;
