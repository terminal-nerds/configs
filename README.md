# Configs

This project is a [monorepo] made with [pnpm workspaces] and powered by
[Turborepo].

[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[pnpm workspaces]: https://pnpm.io/workspaces
[turborepo]: https://turborepo.org/

---

## Project goal

The objective is to keep used **tool(s) configuration(s), which can be shared
and extendable** between the projects as an isolated, maintainable package,
added as a dependency. Thus, to save time configuring, installing, upgrading
plugins dependencies, etc.

---

## Packages

The following packages are available under the [packages/](./packages)
directory. Each of them has its own instructions _(in the `README.md` files)_
on how to use them.

All of them are [scoped] - they are prefixed with `@terminal-nerds/`.
Those packages from this project are accessible for public use and downloadable
from our [GitHub packages] registry.

[scoped]: https://docs.npmjs.com/cli/v6/using-npm/scope
[github packages]: https://github.com/orgs/terminal-nerds/packages?repo_name=configs

| Name                                                         | Version                              |
| ------------------------------------------------------------ | ------------------------------------ |
| [`@terminal-nerds/config-eslint`](config-eslint)             | ![config-eslint version badge]       |
| [`@terminal-nerds/config-prettier`](config-prettier)         | ![config-prettier version badge]     |
| [`@terminal-nerds/config-markdownlint`](config-markdownlint) | ![config-markdownlint version badge] |
| [`@terminal-nerds/config-stylelint`](config-stylelint)       | ![config-stylelint version badge]    |

[config-eslint]: ./packages/eslint/README.md
[config-eslint version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Feslint%2Fpackage.json&style=flat-square
[config-markdownlint]: ./packages/markdownlint/README.md
[config-markdownlint version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Fmarkdownlint%2Fpackage.json&style=flat-square
[config-prettier]: ./packages/prettier/README.md
[config-prettier version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Fprettier%2Fpackage.json&style=flat-square
[config-stylelint]: ./packages/stylelint/README.md
[config-stylelint version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Fstylelint%2Fpackage.json&style=flat-square

---

## Security

TBA...

---

## License

[![License shield]](./LICENSE.md "Project's license")

**The code and packages** are licensed under the [MIT license](./LICENSE.md).

[license shield]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
