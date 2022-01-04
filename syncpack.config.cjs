// https://github.com/JamieMason/syncpack/#-configuration-file

const config = {
	dev: true,
	filter: ".",
	indent: "\t",
	peer: true,
	prod: true,
	semverRange: "^",
	sortAz: [
		"engines",
		"files",
		"peerDependencies",
		"dependencies",
		"devDependencies",
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
		"main",
		"files",
		"turbo",
		"scripts",
		"peerDependencies",
		"dependencies",
		"devDependencies",
	],
	source: ["package.json", "packages/*/package.json"],
	versionGroups: [],
};

module.exports = config;
