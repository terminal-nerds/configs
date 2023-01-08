import { getNodeESMOptions } from "@terminal-nerds/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	...getNodeESMOptions(options),
	bundle: false,
	entry: ["./source/**/*.ts"],
}));
