import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers";

// https://github.com/stylelint/stylelint-config-standard
const config: Partial<Config> = {
	extends: ["stylelint-config-standard"],
};

export default hasModule("sass") ? {} : config;
