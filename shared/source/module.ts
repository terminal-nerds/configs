import { readPackageJSON } from "./package.js";

export function isESModule(): boolean {
	const { type } = readPackageJSON();

	return type === "module";
}

export function isCommonJS(): boolean {
	const { type } = readPackageJSON();

	return type === "commonjs";
}
