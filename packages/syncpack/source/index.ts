import type { SyncpackConfig } from "syncpack/dist/types";

const config: Partial<SyncpackConfig> = {
	// https://github.com/JamieMason/syncpack/#-configuration-file
	dev: true,
	filter: ".",
	indent: "\t",
	peer: true,
	prod: true,
	semverRange: "",
	sortAz: ["engines", "files", "peerDependencies", "dependencies", "devDependencies"],
	sortFirst: [
		"$schema",
		"private",
		"type",
		"publishConfig",
		"name",
		"version",
		"description",
		"keywords",
		"author",
		"license",
		"homepage",
		"repository",
		"bugs",
		"engines",
		"packageManager",
		"volta",
		"exports",
		"main",
		"files",
		"typesVersions",
		"scripts",
		"peerDependencies",
		"dependencies",
		"devDependencies",
	],
	versionGroups: [],
	workspace: true,
};

export default config;
