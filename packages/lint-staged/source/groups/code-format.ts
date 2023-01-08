import { hasPackage } from "@workspace/shared/package";

export const CODE_FORMAT = hasPackage("pretty-quick")
	? ({ "*": ["pretty-quick --check --staged"] } as const)
	: ({ "*": ["prettier --list-different"] } as const);
