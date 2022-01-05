// https://intuit.github.io/auto/docs/configuration/autorc

import { AutoRc } from "auto";

import type { IAllContributorsPluginOptions } from "@auto-it/all-contributors";
import type { ConventionalCommitsOptions } from "@auto-it/conventional-commits";
import type { INpmConfig } from "@auto-it/npm";
import type { IOmitCommitsPluginOptions } from "@auto-it/omit-commits";
import type { IReleaseNotesPluginOptions } from "@auto-it/omit-release-notes";
import type { IPrBodyLabelsPluginOptions } from "@auto-it/pr-body-labels";
import type { IReleasedLabelPluginOptions } from "@auto-it/released";

/** @see https://intuit.github.io/auto/docs/generated/all-contributors */
const allContributorsOptions: IAllContributorsPluginOptions = {
	types: {
		plugin: "**/plugin/**/*",
		code: [
			"**/configs/**/*",
			"**/helpers/**/*",
			"**/packages/**/*",
			"**/package.json",
			"**/tsconfig.json",
		],
	},
};

/** @see https://intuit.github.io/auto/docs/generated/conventional-commits */
const conventionalCommitsOptions: ConventionalCommitsOptions = {
	//
};

/** @see https://intuit.github.io/auto/docs/generated/npm */
const npmOptions: INpmConfig = {
	exact: true,
	canaryScope: "@auto-canary",
};

/** @see https://intuit.github.io/auto/docs/generated/omit-commits */
const omitCommitsOptions: IOmitCommitsPluginOptions = {
	subject: ["WIP"],
};

/** @see https://intuit.github.io/auto/docs/generated/omit-release-notes */
const omitReleaseNotesOptions: IReleaseNotesPluginOptions = {
	//
};

/** @see https://intuit.github.io/auto/docs/generated/pr-body-labels */
const prBodyLabelsOptions: IPrBodyLabelsPluginOptions = {
	//
};

/** @see https://intuit.github.io/auto/docs/generated/released */
const releasedOptions: IReleasedLabelPluginOptions = {
	lockIssues: true,
};

/** @see https://intuit.github.io/auto/docs/configuration/autorc */
const config: AutoRc = {
	labels: [
		{
			name: "major",
			changelogTitle: "💥 Breaking change(s)",
			releaseType: "major",
		},
		{
			name: "minor",
			changelogTitle: "✨ Feature(s)",
			releaseType: "minor",
		},
		{
			name: "patch",
			changelogTitle: "🐛 Bug fix(es)",
			releaseType: "patch",
		},
		{
			name: "internal",
			changelogTitle: "⏭️ Internal only",
			releaseType: "none",
		},
		{
			name: "📓 documentation",
			changelogTitle: "📝 Documentation",
			releaseType: "none",
		},
		{
			name: "🧪 testing",
			changelogTitle: "🧪 Tests",
			releaseType: "none",
		},
		{
			name: "⬆️ dependencies",
			changelogTitle: "⬆️ Dependency Updates",
			releaseType: "none",
		},
		{
			name: "⚡ performance",
			changelogTitle: "⚡ Performance",
			releaseType: "patch",
		},
	],
	onlyPublishWithReleaseLabel: true,


	plugins: [
		["all-contributors", allContributorsOptions],
		["conventional-commits", conventionalCommitsOptions],
		"first-time-contributor",
		["npm", npmOptions],
		["omit-commits", omitCommitsOptions],
		["omit-release-notes", omitReleaseNotesOptions],
		["pr-body-labels", prBodyLabelsOptions],
		["released", releasedOptions],
	],
};

export default config;
