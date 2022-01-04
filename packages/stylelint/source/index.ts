import { deepmerge } from "deepmerge-ts";

import stylelintDefault from "./stylelint";

const configurations = deepmerge(
	stylelintDefault
);

// eslint-disable-next-line unicorn/prefer-module
module.exports = configurations;
