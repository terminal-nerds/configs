import { defineConfig } from "eslint-define-config";

import { hasModule } from "@workspace/helpers/module";

// https://github.com/prettier/eslint-config-prettier
const config = defineConfig({
	extends: ["prettier"],
});
export default hasModule("prettier") ? config : {};
