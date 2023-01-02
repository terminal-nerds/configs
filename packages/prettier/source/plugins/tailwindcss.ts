import { hasPackage } from "@workspace/shared/package";

// https://github.com/tailwindlabs/prettier-plugin-tailwindcss
const config = {
	plugins: ["prettier-plugin-tailwindcss"],
};

export default hasPackage("tailwindcss") ? config : {};
