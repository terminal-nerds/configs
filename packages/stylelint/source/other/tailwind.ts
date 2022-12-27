import { hasPackage } from "@workspace/shared/package";

export const TAILWIND_AT_RULE_SELECTORS = ["tailwind", "apply", "variants", "responsive", "screen"];

export function extendTailwindAtRuleSelectors() {
	return hasPackage("tailwindcss") ? TAILWIND_AT_RULE_SELECTORS : [];
}
