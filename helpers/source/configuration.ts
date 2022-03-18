import { deepmerge } from "deepmerge-ts";

import { hasModule } from "./module";

type Config = Record<string, unknown>;

export function createMergedConfig(dirtyConfigsList: Array<unknown>): Config {
	const cleanConfigsList = dirtyConfigsList.filter(Boolean);

	return deepmerge(...cleanConfigsList) as Config;
}

type IgnoreConditions = Array<{
	module: string;
	patterns: string | Array<string>;
}>;

export function getIgnorePatterns(conditions: IgnoreConditions): Array<string> {
	const ignoresMap = new Set<string>();

	for (const { module, patterns } of conditions) {
		if (hasModule(module)) {
			if (Array.isArray(patterns)) {
				for (const pattern of patterns) {
					ignoresMap.add(pattern);
				}
			} else {
				ignoresMap.add(patterns);
			}
		}
	}

	return [...ignoresMap];
}
