import { hasModule } from "@workspace/helpers/module";

const TAILWIND_AT_RULE_SELECTORS = [
	"tailwind",
	"apply",
	"variants",
	"responsive",
	"screen",
];

export function extendTailwindAtRuleSelectors() {
	return hasModule("tailwindcss") ? TAILWIND_AT_RULE_SELECTORS : [];
}
