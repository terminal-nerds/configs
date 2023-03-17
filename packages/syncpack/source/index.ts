import { SyncpackRc } from "syncpack/dist/get-context/get-config/schema";

/** @see {@link https://github.com/JamieMason/syncpack/#-configuration-file} */
const config = SyncpackRc.parse({
	dependencyTypes: ["dev", "prod", "peer"],
	indent: "\t",
	semverRange: "",
	sortAz: [
		"engines",
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
		"exports",
		"main",
		"files",
		"dependencies",
		"peerDependencies",
		"peerDependenciesMeta",
		"optionalDependencies",
		"devDependencies",
		"scripts",
	],
});

export default config;
