import type { RcFile } from "syncpack";

/** @see {@link https://github.com/JamieMason/syncpack/#-configuration-file} */
export const CONFIG: RcFile = {
	indent: "\t",
	sortAz: [
		"engines",
		"exports",
		"files",
		"imports",
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
	versionGroups: [
		{
			label: "Use workspace protocol for local packages",
			dependencies: ["$LOCAL"],
			dependencyTypes: ["dev", "peer", "prod"],
			pinVersion: "workspace:*",
		},
		{
			label: "Everything else",
			// range: "",
			dependencies: ["**"],
			dependencyTypes: [
				"dev",
				"local",
				"peer",
				"overrides",
				"prod",
				"resolutions",
				"pnpmOverrides",
			],
			packages: ["**"],
		},
	],
};

export default CONFIG;
