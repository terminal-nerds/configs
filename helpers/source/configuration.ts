import { deepmerge } from "deepmerge-ts";

type Config = Record<string, unknown>;

export function createMergedConfig(dirtyConfigsList: Array<unknown>): Config {
	const cleanConfigsList = dirtyConfigsList.filter(Boolean);

	return deepmerge(...cleanConfigsList) as Config;
}
