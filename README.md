# Configs

[![pnpm workspace badge]][pnpm workspace]
[![stackshare badge]][stackshare url]

➡️ This project is a [monorepo] made with [pnpm workspace] and powered by
[ultra-runner], [changesets].

[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[pnpm workspace]: https://pnpm.io/workspaces
[pnpm workspace badge]: https://img.shields.io/badge/-pnpm%20workspace-informational?style=for-the-badge&logo=pnpm
[ultra-runner]: https://github.com/folke/ultra-runner
[changesets]: https://github.com/changesets/changesets
[stackshare badge]: https://img.shields.io/badge/-tech%20stack-yellow?style=for-the-badge&logo=stackshare
[stackshare url]: https://stackshare.io/terminal-nerds/configs

## Project goal

🎯 The objective is to keep used **tool(s) configuration(s), which can be shared
and extendable** between the projects as an isolated, maintainable package,
added as a dependency. Thus, to save time configuring, installing, upgrading
plugins dependencies, etc.

---

## Packages

![workflow CI badge]\
![node.js version support badge]
[![Dependencies badge]][dependencies url]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/eslint-config?style=for-the-badge&logo=nodedotjs
[dependencies badge]: https://img.shields.io/librariesio/github/terminal-nerds/configs?style=for-the-badge
[dependencies url]: https://libraries.io/github/terminal-nerds/configs "Dependencies status"
[workflow ci badge]: https://img.shields.io/github/workflow/status/terminal-nerds/configs/CI?logo=github&style=for-the-badge

📦 The following packages are available under the [packages/](./packages)
directory. Each of them has its own instructions _(in the `README.md` files)_
on how to use them.

**ℹ️ All of them are [scoped] - they are prefixed with `@terminal-nerds/`.**
They are accessible for public use and downloadable from the [npmjs.com
registry].

[scoped]: https://docs.npmjs.com/cli/v6/using-npm/scope
[npmjs.com registry]: https://npmjs.com/org/terminal-nerds

| Name                                                | Version                                                              |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| [![eslint-config badge]][eslint-config]             | [![eslint-config version badge]][eslint-config npm page]             |
| [![markdownlint-config badge]][markdownlint-config] | [![markdownlint-config version badge]][markdownlint-config npm page] |
| [![prettier-config badge]][prettier-config]         | [![prettier-config version badge]][prettier-config npm page]         |
| [![stylelint-config badge]][stylelint-config]       | [![stylelint-config version badge]][stylelint-config npm page]       |
| [![syncpack-config badge]][syncpack-config]         | [![syncpack-config version badge]][syncpack-config npm page]         |
| [![typescript-config badge]][typescript-config]     | [![typescript-config version badge]][typescript-config npm page]     |

[eslint-config]: ./packages/eslint/README.md
[eslint-config badge]: https://img.shields.io/badge/eslint-config-informational?style=flat-square&logo=eslint
[eslint-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/eslint-config/latest?style=flat-square&logo=npm
[eslint-config npm page]: https://www.npmjs.com/package/@terminal-nerds/eslint-config
[markdownlint-config]: ./packages/markdownlint/README.md
[markdownlint-config badge]: https://img.shields.io/badge/markdownlint-config-informational?style=flat-square&logo=markdown
[markdownlint-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/markdownlint-config/latest?style=flat-square&logo=npm
[markdownlint-config npm page]: https://www.npmjs.com/package/@terminal-nerds/markdownlint-config
[prettier-config]: ./packages/prettier/README.md
[prettier-config badge]: https://img.shields.io/badge/prettier-config-informational?style=flat-square&logo=prettier
[prettier-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/prettier-config/latest?style=flat-square&logo=npm
[prettier-config npm page]: https://www.npmjs.com/package/@terminal-nerds/prettier-config
[stylelint-config]: ./packages/stylelint/README.md
[stylelint-config badge]: https://img.shields.io/badge/stylelint-config-informational?style=flat-square&logo=stylelint
[stylelint-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/stylelint-config/latest?style=flat-square&logo=npm
[stylelint-config npm page]: https://www.npmjs.com/package/@terminal-nerds/stylelint-config
[syncpack-config]: ./packages/syncpack/README.md
[syncpack-config badge]: https://img.shields.io/badge/syncpack-config-informational?style=flat-square&logo=nodedotjs
[syncpack-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/syncpack-config/latest?style=flat-square&logo=npm
[syncpack-config npm page]: https://www.npmjs.com/package/@terminal-nerds/syncpack-config
[typescript-config]: ./packages/typescript/README.md
[typescript-config badge]: https://img.shields.io/badge/typescript-config-informational?style=flat-square&logo=typescript
[typescript-config version badge]: https://img.shields.io/npm/v/@terminal-nerds/typescript-config/latest?style=flat-square&logo=npm
[typescript-config npm page]: https://www.npmjs.com/package/@terminal-nerds/typescript-config

## License

[![License badge]](./LICENSE.md "Project's license")

⚖️ **The code, including packages** are licensed under the [MIT license](./LICENSE.md).

[![FOSSA Status Card]][fossa status]

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[fossa status card]: https://app.fossa.com/api/projects/custom%2B20521%2Fgit%40github.com%3Aterminal-nerds%2Fconfigs.git.svg?type=large
[fossa status]: https://app.fossa.com/projects/custom%2B20521%2Fgit%40github.com%3Aterminal-nerds%2Fconfigs.git?ref=badge_large

---

## Community

[![discord badge]][discord server]

✉️ **The best way to get in touch with us or join us is using our [Discord server]**.
Anyone is welcome to hop in for a chat. 🙂

[discord server]: https://discord.gg/decp3g7BEN
[discord badge]: https://img.shields.io/discord/862890839537877012?label=Discord&logo=discord&style=for-the-badge

---

## Security

[![lgtm alerts badge]][lgtm report]
[![lgtm grade badge]][lgtm report]\
[![SonarCloud badge]][sonarcloud report]\
[![DeepScan grade badge]][deepscan report]

🔐 Our team has a shared [Security Policy]. If you have concerns or found an
issue, please follow the instructions, and
remember about one thing:

> We are all ears, but please, **DO NOT create a GitHub issue for reporting a
> vulnerability**.

[security policy]: https://github.com/terminal-nerds/configs/security/policy
[lgtm alerts badge]: https://img.shields.io/lgtm/alerts/github/terminal-nerds/configs?style=for-the-badge&logo=lgtm
[lgtm grade badge]: https://img.shields.io/lgtm/grade/javascript/github/terminal-nerds/configs?style=for-the-badge&logo=lgtm
[lgtm report]: https://lgtm.com/projects/g/terminal-nerds/configs
[sonarcloud badge]: https://img.shields.io/sonar/quality_gate/terminal-nerds_configs/main?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge
[sonarcloud report]: https://sonarcloud.io/summary/overall?id=terminal-nerds_configs
[deepscan grade badge]: https://deepscan.io/api/teams/16781/projects/20096/branches/536130/badge/grade.svg
[deepscan report]: https://deepscan.io/dashboard#view=project&tid=16781&pid=20096&bid=536130

---

## Contributing

[![contributors badge]][contributors url]

🤝 This project follows the [all-contributors] specification.\
**Therefore, contributions of any kind are welcome!**

Please refer to our [CONTRIBUTING] file for more information if you wish to get
involved.

[all-contributors]: https://github.com/all-contributors/all-contributors
[contributing]: ./.github/CONTRIBUTING.md
[contributors badge]: https://img.shields.io/github/contributors/terminal-nerds/configs?style=for-the-badge
[contributors url]: #contributors

### Contributors

🥰 Thanks goes to these wonderful people and bots _([emoji key])_:

[emoji key]: https://allcontributors.org/docs/en/emoji-key

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/xeho91"><img src="https://avatars.githubusercontent.com/u/18627568?v=4?s=60" width="60px;" alt=""/><br /><sub><b>Matt Kadlubowski</b></sub></a><br /><a href="https://github.com/terminal-nerds/@terminal-nerds/configs/commits?author=xeho91" title="Code">💻</a> <a href="#maintenance-xeho91" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/atlassian/changesets"><img src="https://avatars.githubusercontent.com/u/51163350?v=4?s=60" width="60px;" alt=""/><br /><sub><b>changesets</b></sub></a><br /><a href="https://github.com/terminal-nerds/@terminal-nerds/configs/commits?author=changesets" title="Documentation">📖</a> <a href="#platform-changesets" title="Packaging/porting to new platform">📦</a> <a href="#tool-changesets" title="Tools">🔧</a></td>
    <td align="center"><a href="https://renovatebot.com/"><img src="https://avatars.githubusercontent.com/u/38656520?v=4?s=60" width="60px;" alt=""/><br /><sub><b>Renovate Bot</b></sub></a><br /><a href="#maintenance-renovatebot" title="Maintenance">🚧</a> <a href="#security-renovatebot" title="Security">🛡️</a> <a href="#tool-renovatebot" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
