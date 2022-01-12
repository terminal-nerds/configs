# Configs

[![pnpm workspace badge]][pnpm workspace]

➡️ This project is a [monorepo] made with [pnpm workspace] and powered by
[ultra-runner], [changesets].

[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[pnpm workspace]: https://pnpm.io/workspaces
[pnpm workspace badge]: https://img.shields.io/badge/monorepo-pnpm%20workspace-informational?style=for-the-badge&logo=pnpm
[ultra-runner]: https://github.com/folke/ultra-runner
[changesets]: https://github.com/changesets/changesets

## Project goal

🎯 The objective is to keep used **tool(s) configuration(s), which can be shared
and extendable** between the projects as an isolated, maintainable package,
added as a dependency. Thus, to save time configuring, installing, upgrading
plugins dependencies, etc.

---

## Packages

![node.js version support badge]
[![Dependencies badge]][dependencies url]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/config-eslint?style=for-the-badge&logo=nodedotjs
[dependencies badge]: https://img.shields.io/librariesio/github/terminal-nerds/configs?style=for-the-badge
[dependencies url]: https://libraries.io/github/terminal-nerds/configs "Dependencies status"

📦 The following packages are available under the [packages/](./packages)
directory. Each of them has its own instructions _(in the `README.md` files)_
on how to use them.

**ℹ️ All of them are [scoped] - they are prefixed with `@terminal-nerds/`.**
They are accessible for public use and downloadable from the [npmjs.com
registry].

[scoped]: https://docs.npmjs.com/cli/v6/using-npm/scope
[npmjs.com registry]: https://npmjs.com/org/terminal-nerds

| Name                                                | Version                                                              | Changelogs                                                              |
| --------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [![eslint-config badge]][eslint-config]             | [![eslint-config version badge]][eslint-config npm page]             | [![eslint-config changelog badge]][eslint-config changelog]             |
| [![markdownlint-config badge]][markdownlint-config] | [![markdownlint-config version badge]][markdownlint-config npm page] | [![markdownlint-config changelog badge]][markdownlint-config changelog] |
| [![prettier-config badge]][prettier-config]         | [![prettier-config version badge]][prettier-config npm page]         | [![prettier-config changelog badge]][prettier-config changelog]         |
| [![stylelint-config badge]][stylelint-config]       | [![stylelint-config version badge]][stylelint-config npm page]       | [![stylelint-config changelog badge]][stylelint-config changelog]       |

[eslint-config]: ./packages/eslint/README.md
[eslint-config badge]: https://img.shields.io/badge/config-eslint-informational?style=flat-square&logo=eslint
[eslint-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/config-eslint/latest?style=flat-square&logo=npm
[eslint-config npm page]: https://www.npmjs.com/package/@terminal-nerds/config-eslint
[eslint-config changelog]: https://changelogs.xyz/@terminal-nerds/config-eslint
[eslint-config changelog badge]: https://img.shields.io/badge/changelog.xyz-%40terminal--nerds%2Fconfig--eslint-informational?style=flat-square
[markdownlint-config]: ./packages/markdownlint/README.md
[markdownlint-config badge]: https://img.shields.io/badge/config-markdownlint-informational?style=flat-square&logo=markdownlint
[markdownlint-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/markdownlint-config/latest?style=flat-square&logo=npm
[markdownlint-config npm page]: https://www.npmjs.com/package/@terminal-nerds/markdownlint-config
[markdownlint-config changelog badge]: https://img.shields.io/badge/changelog.xyz-%40terminal--nerds%2Fconfig--markdownlint-informational?style=flat-square
[markdownlint-config changelog]: https://changelogs.xyz/@terminal-nerds/markdownlint-config
[prettier-config]: ./packages/prettier/README.md
[prettier-config badge]: https://img.shields.io/badge/config-prettier-informational?style=flat-square&logo=prettier
[prettier-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/prettier-config/latest?style=flat-square&logo=npm
[prettier-config npm page]: https://www.npmjs.com/package/@terminal-nerds/prettier-config
[prettier-config changelog badge]: https://img.shields.io/badge/changelog.xyz-%40terminal--nerds%2Fconfig--prettier-informational?style=flat-square
[prettier-config changelog]: https://changelogs.xyz/@terminal-nerds/prettier-config
[stylelint-config]: ./packages/stylelint/README.md
[stylelint-config badge]: https://img.shields.io/badge/config-stylelint-informational?style=flat-square&logo=stylelint
[stylelint-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/stylelint-config/latest?style=flat-square&logo=npm
[stylelint-config npm page]: https://www.npmjs.com/package/@terminal-nerds/stylelint-config
[stylelint-config changelog badge]: https://img.shields.io/badge/changelog.xyz-%40terminal--nerds%2Fconfig--stylelint-informational?style=flat-square
[stylelint-config changelog]: https://changelogs.xyz/@terminal-nerds/stylelint-config

## License

[![License badge]](./LICENSE.md "Project's license")

⚖️ **The code, including packages** are licensed under the [MIT license](./LICENSE.md).

[![FOSSA Status Card]][fossa status]

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[fossa status card]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fxeho91%2Fconfigs.svg?type=large
[fossa status]: https://app.fossa.com/projects/git%2Bgithub.com%2Fxeho91%2Fconfigs?ref=badge_large

---

## Contact

[![discord badge]][discord server]

✉️ **The best way to contact us is using our [Discord server]**. Anyone is
welcome to hop in for a chat. 🙂

[discord server]: https://discord.gg/decp3g7BEN
[discord badge]: https://img.shields.io/discord/862890839537877012?label=Discord&logo=discord&style=for-the-badge
