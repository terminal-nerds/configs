import { type NormalizedPackageJson, readPackageUpSync } from "read-pkg-up";

export function readPackageJSON(): NormalizedPackageJson {
	const file = readPackageUpSync();

	if (file) {
		return file.packageJson;
	} else {
		throw new Error('Cannot locate "package.json" file!');
	}
}

export function hasModule(name: string): boolean {
	const { dependencies, devDependencies } = readPackageJSON();

	return new Map(
		Object.entries({
			...devDependencies,
			...dependencies,
		}),
	).has(name);
}

export function isESModule(): boolean {
	const { type } = readPackageJSON();

	return type === "module";
}

export function isCommonJS(): boolean {
	const { type } = readPackageJSON();

	return type === "commonjs";
}
