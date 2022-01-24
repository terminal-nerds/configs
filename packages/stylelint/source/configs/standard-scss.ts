import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers/module";

// https://github.com/stylelint-scss/stylelint-config-standard-scss
const config: Partial<Config> = {
	extends: ["stylelint-config-standard-scss"],
};

export default  hasModule("sass") ? config : {};
