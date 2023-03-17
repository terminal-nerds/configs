import { createPropertiesGroup } from "../index.ts";

const group = createPropertiesGroup([
	"display",
	// Flex
	"flex-direction",
	"flex-flow",
	"flex-wrap",
	"order",
	// Grid
	"grid",
	"grid-template",
	"grid-template-areas",
	"grid-template-rows",
	"grid-template-columns",
	"grid-row",
	"grid-column",
	"grid-auto-rows",
	"grid-auto-columns",
	"grid-auto-flow",
	// Shared
	"align-content",
	"align-items",
	"place-content",
	"place-items",
	"justify-content",
	"justify-items",
	"gap",
	"column-gap",
	"row-gap",
	"grid-gap",
	"grid-column-gap",
	"grid-row-gap",
]);

export default group;
