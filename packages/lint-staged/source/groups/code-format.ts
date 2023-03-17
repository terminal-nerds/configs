import { HAS_PRETTY_QUICK } from "../checks.ts";

export const CODE_FORMAT = HAS_PRETTY_QUICK
	? ({ "*": ["pretty-quick --check --staged"] } as const)
	: ({ "*": ["prettier --list-different"] } as const);
