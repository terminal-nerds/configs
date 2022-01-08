# Configs

This project is a [monorepo] made with [pnpm workspaces] and powered by
[ultra-runner], [changesets].

[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[pnpm workspaces]: https://pnpm.io/workspaces
[ultra-runner]: https://github.com/folke/ultra-runner
[changesets]: https://github.com/changesets/changesets

---

## Project goal

🎯 The objective is to keep used **tool(s) configuration(s), which can be shared
and extendable** between the projects as an isolated, maintainable package,
added as a dependency. Thus, to save time configuring, installing, upgrading
plugins dependencies, etc.

---

## Prerequisites

[![Dependencies shield]][dependencies url]

The configuration packages require these tools to use locally on your device(s)
to develop with them.

1. <img
      alt="Git logo icon"
      width="14"
      src="https://api.iconify.design/logos/git-icon.svg"
   />
   [Git] version control tool.

1. <img
      alt="Git logo icon"
      width="14"
      src="https://api.iconify.design/logos/nodejs-icon.svg"
   />
   Latest [Node.js] LTS _(Long-Term Support)_ version.

1. <img
      alt="pnpm logo icon"
      width="14"
      src="https://api.iconify.design/vscode-icons/file-type-light-pnpm.svg"
   />
   [pnpm] - as Node.js package manager.

> ℹ️ **NOTE**:\
> Other package managers such as [`npm`][npm] or [`yarn`][yarn] _may_ work;
> however, **we build those packages fully supporting [`pnpm`][pnpm] only in
> our minds**.

[dependencies shield]: https://img.shields.io/librariesio/github/terminal-nerds/configs?style=for-the-badge
[dependencies url]: https://libraries.io/github/terminal-nerds/configs "Dependencies status"
[git]: https://git-scm.com/
[node.js]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/

---

## Packages

📦 The following packages are available under the [packages/](./packages)
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
| [`@terminal-nerds/config-markdownlint`](config-markdownlint) | ![config-markdownlint version badge] |
| [`@terminal-nerds/config-prettier`](config-prettier)         | ![config-prettier version badge]     |
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

## License

[![License shield]](./LICENSE.md "Project's license")

⚖️ **The code and packages** are licensed under the [MIT license](./LICENSE.md).

[![FOSSA Status Card]][FOSSA Status]

[fossa status card]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fxeho91%2Fconfigs.svg?type=large
[fossa status]: https://app.fossa.com/projects/git%2Bgithub.com%2Fxeho91%2Fconfigs?ref=badge_large

---

## Contact

[![discord shield]][discord server]

✉️ **The best way to contact us is using our [Discord server]**. Anyone is
welcome to hop in for a chat. 🙂

[discord server]: https://discord.gg/decp3g7BEN
[discord shield]: https://img.shields.io/discord/862890839537877012?label=Discord&logo=discord&style=for-the-badge
[discussions]: https://github.com/terminal-nerds/terminal-nerd/discussions

🗨️ **We are also open to feedback**. If you have any suggestions, feel free
to reach us.\
The best way is to use `#💡-ideas` channel on our [Discord server]
and share your thoughts & ideas!
