import { existsSync } from "node:fs";
import { join } from "node:path";

import { packageDirectorySync } from "pkg-dir";

export function getNearestPackageRootPath(currentPath: string): string {
	const packageDirectoryPath = packageDirectorySync({ cwd: currentPath });

	if (packageDirectoryPath) {
		return packageDirectoryPath;
	} else {
		throw new Error(`Cannot determine the nearest root of the package for the file: ${currentPath}!`);
	}
}

export function getNearestTypeScriptConfigPath(currentPath: string): string {
	const packageRootPath = getNearestPackageRootPath(currentPath);
	const configPath = join(packageRootPath, "tsconfig.json");

	if (existsSync(configPath)) {
		return configPath;
	} else {
		throw new Error('Cannot locate nearest "tsconfig.json" file!');
	}
}