import { type NormalizedPackageJson, readPackageUpSync } from "read-pkg-up";
import type { KebabCase } from "type-fest";

export type PackageName<T extends string = string> = KebabCase<T>;

export function readPackageJSON(): NormalizedPackageJson {
	const file = readPackageUpSync();

	if (file) {
		return file.packageJson;
	} else {
		throw new Error('Cannot locate nearest "package.json" file!');
	}
}

export type Depedencies = Partial<Record<PackageName, string>>;

export function getAllDepedencies(): Depedencies {
	const { dependencies, devDependencies, peerDependencies } = readPackageJSON();

	return { ...dependencies, ...devDependencies, ...peerDependencies };
}

export function getAllPackagesNames(): Set<PackageName> {
	return new Set(Object.keys(getAllDepedencies()));
}

export function hasPackage(name: string): boolean {
	return getAllPackagesNames().has(name);
}
