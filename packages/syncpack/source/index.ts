import type { RcFile } from "syncpack";

/** @see {@link https://github.com/JamieMason/syncpack/#-configuration-file} */
const config: RcFile = {
	dependencyTypes: ["dev", "prod", "peer"],
	indent: "\t",
	semverRange: "",
	sortAz: [
		"engines",
		"exports",
		"files",
		"dependencies",
		"peerDependencies",
		"peerDependenciesMeta",
		"optionalDependencies",
		"devDependencies",
		"scripts",
	],
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
		"main",
		"files",
		"exports",
		"scripts",
		"dependencies",
		"peerDependencies",
		"peerDependenciesMeta",
		"optionalDependencies",
		"devDependencies",
	],
};

export default config;
