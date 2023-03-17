import type { CoverageOptions } from "vitest";
import type { UserConfig } from "vitest/config";

import { BASE_OPTIONS, IS_WATCH_COMMAND } from "./base.ts";

// https://vitest.dev/guide/coverage.html
export const COVERAGE_OPTIONS: CoverageOptions = {
	enabled: !IS_WATCH_COMMAND,
	reporter: ["lcov", "json", "text"],
};

export const WITH_COVERAGE_OPTIONS: UserConfig["test"] = {
	...BASE_OPTIONS,
	coverage: COVERAGE_OPTIONS,
};
