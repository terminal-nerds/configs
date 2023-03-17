import { createPropertiesGroup } from "../index.ts";

const group = createPropertiesGroup([
	// Flex
	"flex",
	"flex-basis",
	"flex-grow",
	"flex-shrink",
	// Grid
	"grid-area",
	"grid-row-start",
	"grid-row-end",
	"grid-column-start",
	"grid-column-end",
	// Shared
	"align-self",
	"justify-self",
	"place-self",
]);

export default group;
