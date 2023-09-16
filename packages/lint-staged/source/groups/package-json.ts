import { HAS_DEPCHECK, HAS_SYNCPACK } from "../checks.ts";

export const PACKAGE_JSON = {
	"**/package.json": () => [
		...(HAS_DEPCHECK ? ["depcheck"] : []),
		...(HAS_SYNCPACK
			? ["syncpack list-mismatches", "syncpack format"]
			: []),
	],
} as const;
