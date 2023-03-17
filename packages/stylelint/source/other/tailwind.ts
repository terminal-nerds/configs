import { HAS_TAILWINDCSS } from "../checks.ts";

export const TAILWIND_AT_RULE_SELECTORS = ["tailwind", "apply", "variants", "responsive", "screen"];

export function extendTailwindAtRuleSelectors() {
	return HAS_TAILWINDCSS ? TAILWIND_AT_RULE_SELECTORS : [];
}
