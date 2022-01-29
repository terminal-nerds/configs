import type { Config } from "stylelint";

import { hasModule } from "@workspace/helpers/module";

// https://github.com/prettier/stylelint-config-prettier
const config: Partial<Config> = {
	extends: ["stylelint-config-prettier"],
};

export default hasModule("prettier") ? config : {};
