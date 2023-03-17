import type { UserConfig } from "vitest/config";

export const IS_WATCH_COMMAND = process.argv[2] === "watch";

// https://vitest.dev/config/
export const BASE_OPTIONS: UserConfig["test"] = {
	logHeapUsage: true,
	open: false,
	reporters: ["verbose"],
	ui: IS_WATCH_COMMAND,
};
