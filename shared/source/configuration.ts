import { deepmerge } from "deepmerge-ts";

type Config<T extends Record<string, unknown> = Record<string, unknown>> = T;

export function createMergedConfig<
	T extends Record<string, unknown> = Record<string, unknown>,
>(dirtyConfigsList: Array<unknown>): Config<T> {
	const cleanConfigsList = dirtyConfigsList.filter(Boolean);

	return deepmerge(...cleanConfigsList) as Config<T>;
}
