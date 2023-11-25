import { z } from "zod";

export const SCHEMA_ARRAY = z.array(z.any());

export type AnyArray = ReadonlyArray<unknown>;

export function validateArray(value: unknown): asserts value is AnyArray {
	SCHEMA_ARRAY.parse(value);
}

export function validateArrays(...arrays: AnyArray[]): void {
	for (const currentArray of arrays) {
		validateArray(currentArray);
	}
}

/** Get selected items from an array. */
export function exclude<
	const T,
	const I extends readonly (T | false | undefined | null)[],
>(array: readonly T[], items: I): Exclude<T, I[number]>[] {
	validateArrays(array, items);

	const itemsSet = new Set(items);

	return array.filter((item) => !itemsSet.has(item)) as Exclude<
		T,
		I[number]
	>[];
}
