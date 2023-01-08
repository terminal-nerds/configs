import { existsSync } from "node:fs";

import { packageDirectorySync } from "pkg-dir";

export function getNearestPackageRootPath(currentPath: string): string {
	const packageDirectoryPath = packageDirectorySync({ cwd: currentPath });

	if (packageDirectoryPath) {
		return packageDirectoryPath;
	} else {
		throw new Error(`Cannot determine the nearest root of the package for the file: ${currentPath}!`);
	}
}
