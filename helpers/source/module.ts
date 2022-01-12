/* eslint-disable @typescript-eslint/no-var-requires */
import path from "node:path";

import type { PackageJson } from "type-fest";

export function readPackageJSON(): PackageJson {
	const filePath = path.join(process.cwd(), "./package.json");

	return require(filePath);
}

export function hasModule(name: string): boolean {
	const { dependencies, devDependencies }  = readPackageJSON();

	return new Map(
		Object.entries({
			...devDependencies,
			...dependencies,
		}),
	).has(name);
}

export function isESM() {
	const { type } = readPackageJSON();

	return type === "module";
}
