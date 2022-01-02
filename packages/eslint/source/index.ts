import { deepmerge } from "deepmerge-ts";

// import { hasModule } from "@workspace/helpers";

import eslintDefault from "./eslint.js";

const configurations = deepmerge(eslintDefault);

module.exports = configurations;
