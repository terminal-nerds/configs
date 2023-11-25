import { deepmerge } from "deepmerge-ts";
import { z } from "zod";

const OBJECT_SCHEMA = z.object({});

export function mergeObjects(objects: ReadonlyArray<object>): object {
	z.array(OBJECT_SCHEMA).parse(objects);

	return deepmerge(...objects) as object;
}

export function createMergedConfig<T extends object>(
	dirtyConfigsList: readonly (object | false)[],
): T {
	const cleanConfigsList = dirtyConfigsList.filter(
		Boolean,
	) as readonly object[];

	return mergeObjects(cleanConfigsList) as T;
}
