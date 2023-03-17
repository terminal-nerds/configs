import type { Config } from "stylelint";

import accessibilityInteractionGroup from "./groups/accessibility-interaction.ts";
import backgroundBorderGroup from "./groups/background-border.ts";
import boxModelGroup from "./groups/box-model.ts";
import displayLayoutGroup from "./groups/display-layout.ts";
import flexGridChildrenGroup from "./groups/flex-grid-children.ts";
import positionGroup from "./groups/position.ts";
import svgGroup from "./groups/svg.ts";
import transitionAnimationGroup from "./groups/transition-animation.ts";
import typographyGroup from "./groups/typography.ts";

export type BeforeOption = "always" | "never" | "threshold";
export type Properties = Array<string>;

export interface PropertiesGroup {
	emptyLineBefore: BeforeOption;
	noEmptyLineBetween: boolean;
	properties: Properties;
}

export function createPropertiesGroup(
	properties: Properties,
	beforeOption: BeforeOption = "always",
	betweenOption = false,
): PropertiesGroup {
	return {
		emptyLineBefore: beforeOption,
		noEmptyLineBetween: betweenOption,
		properties,
	};
}

// https://github.com/hudochenkov/stylelint-order
const config: Partial<Config> = {
	plugins: ["stylelint-order"],

	rules: {
		"order/order": ["custom-properties", "declarations"],
		"order/properties-order": [
			createPropertiesGroup(["all"]),
			positionGroup,
			flexGridChildrenGroup,
			displayLayoutGroup,
			boxModelGroup,
			typographyGroup,
			backgroundBorderGroup,
			transitionAnimationGroup,
			svgGroup,
			accessibilityInteractionGroup,
		],
	},
};

export default config;
