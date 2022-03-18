import type { Config } from "stylelint";

import accessibilityInteractionGroup from "./groups/accessibility-interaction.js";
import backgroundBorderGroup from "./groups/background-border.js";
import displayLayoutGroup from "./groups/display-layout.js";
import boxModelGroup from "./groups/box-model.js";
import flexGridChildrenGroup from "./groups/flex-grid-children.js";
import positionGroup from "./groups/position.js";
import svgGroup from "./groups/svg.js";
import transitionAnimationGroup from "./groups/transition-animation.js";
import typographyGroup from "./groups/typography.js";

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
