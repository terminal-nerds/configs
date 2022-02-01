// https://github.com/okonet/lint-staged

const config = {
	// Prettier
	"*": ["pretty-quick --check --staged"],

	// ESLint
	"*.{js,json,ts,yml,yaml}": ["eslint"],

	// markdownlint
	"*.md": ["markdownlint"],

	// TypeScript types (in each package, because of different configs)
	"./helpers/**/*.ts": () => `tsc --project ./helpers/tsconfig.json --noEmit`,
	"./packages/eslint/source/**/*.ts": () =>
		`tsc --project ./packages/eslint/tsconfig.json --noEmit`,
	"./packages/markdownlint/source/**/*.ts": () =>
		`tsc --project ./packages/markdownlint/tsconfig.json --noEmit`,
	"./packages/prettier/source/**/*.ts": () =>
		`tsc --project ./packages/prettier/tsconfig.json --noEmit`,
	"./packages/stylelint/source/**/*.ts": () =>
		`tsc --project ./packages/stylelint/tsconfig.json --noEmit`,
};

export default config;