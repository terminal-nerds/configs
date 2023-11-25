import { existsSync } from "node:fs";
import { join } from "node:path";

import { packageDirectorySync } from "pkg-dir";
import type { Join } from "type-fest";

import { IN_BROWSER, IN_BUN, IN_DENO, IN_NODE } from "./scope.ts";

export type AbsolutePath = `/${string}`;
export type CWD = AbsolutePath;

export function isCWD(path: string): path is CWD {
	return path.startsWith("/");
}

function throwIfBrowser() {
	if (IN_BROWSER)
		throw new Error(
			`You cannot get current working directory in the browser.`,
		);
}

function getCWD(): string {
	if (IN_BUN || IN_NODE) {
		return process.cwd();
	} else if (IN_DENO) {
		// @ts-ignore TODO: Add types for deno
		return Deno.cwd();
	} else {
		throw new Error(
			`Cannot determine the current working directory in the current runtime environment.`,
		);
	}
}

export function getCurrentWorkingDirectory(): CWD {
	throwIfBrowser();

	const cwd = getCWD();

	if (isCWD(cwd)) {
		return cwd;
	} else {
		throw new TypeError(
			`The current runtime provived an invalid current working directory path - ${cwd}.`,
		);
	}
}

export function joinPaths<T extends readonly string[]>(paths: T): Join<T, "/"> {
	const joined = join(...paths);

	if (isCWD(joined)) {
		return joined as Join<T, "/">;
	} else {
		throw new TypeError(`Joined path did not return an absolute path.`);
	}
}

export function getNearestPackageRootPath(cwd?: string): AbsolutePath {
	throwIfBrowser();

	const packageDirectoryPath = packageDirectorySync({
		cwd: cwd ?? getCurrentWorkingDirectory(),
	});

	if (packageDirectoryPath && isCWD(packageDirectoryPath)) {
		return packageDirectoryPath;
	} else {
		throw new Error(
			`Cannot determine the nearest root of the package for the file: ${cwd}!`,
		);
	}
}

export type ConfigFileName = string;
export type ConfigPath<A extends CWD, N extends ConfigFileName> = Join<
	[A, N],
	"/"
>;

export function getNearestConfigPath<
	N extends ConfigFileName,
	A extends AbsolutePath = AbsolutePath,
>(fileName: N, cwd?: A): ConfigPath<A, N> {
	const packageRootPath = getNearestPackageRootPath(cwd);
	const configPath = joinPaths<[A, N]>([packageRootPath as A, fileName]);

	if (existsSync(configPath)) {
		return configPath;
	} else {
		throw new Error(`Cannot locate nearest "${fileName}" file!`);
	}
}
