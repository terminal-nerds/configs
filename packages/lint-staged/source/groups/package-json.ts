import { hasPackage } from "@workspace/shared/package";

export const PACKAGE_JSON = {
	"**/package.json": () => [
		...(hasPackage("depcheck") ? ["depcheck"] : []),
		...(hasPackage("syncpack") ? ["syncpack list-mismatches", "syncpack format"] : []),
	],
} as const;
