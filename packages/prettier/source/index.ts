import { deepmerge } from "deepmerge-ts";

import { hasModule } from "@workspace/helpers";

import prettierDefault from "./prettier.js";

const configurations = deepmerge(prettierDefault);

module.exports = configurations;
