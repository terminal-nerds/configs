# Configs

[![pnpm workspace badge]][pnpm workspace]
[![changesets badge]][changesets]
[![turborepo badge]][turborepo]\
[![stackshare badge]][stackshare url]

➡️ This project is a [monorepo] made with [pnpm workspace] and powered by
[changesets], [turborepo].

[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[pnpm workspace]: https://pnpm.io/workspaces
[pnpm workspace badge]: https://img.shields.io/badge/-pnpm%20workspace-informational?style=for-the-badge&logo=pnpm
[changesets]: https://github.com/changesets/changesets
[changesets badge]: https://img.shields.io/badge/-changesets-gray?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAABYUlEQVQoU02RvUoDQRDHZ3b3TiwsjI0xWFjb+gIKoqIIKUSCCjY+ho3voO9gF7wq+AaBVOJXY4JaCH5FMSbeJTf+Z3OeWVhmv37zn/kvCwYR6dTBmA1mXsj2Pmyed+6N4dkgdBJYQ4Eh5gzU+1EYN6xJaDFqi3NGAQ6cHYIOJECD+36mJikWMVJ0cbISvfns+tgFVkJrCUkoWho3PivgC4T5eEAcY9sbEPX6xOvRMxQYChYJGAmwHrO12vLEqgcz2LYTSgCxgl3McvQkoQJQc1CtlwtWu/szY9QHuvuS9Af1dlDqVvWRh4YwXVamtaV85Ip6cvspolCckkCRt88eJIRJXtEYut75h3Pw6kMEpghM4QTxG3G32hLfn/bmezR0szfjmRxsvEvaTQBl5qwV2Zc2ddJM1ckQ7jrnpLlf8ucerL/KIUo7UlMAtjaKPDfaz+Rx8wV/V9D/C1JTaR2UTn8B1OeSRP02JSkAAAAASUVORK5CYII=
[turborepo]: https://github.com/vercel/turborepo
[turborepo badge]: https://img.shields.io/badge/-turborepo-gray?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAklJREFUOE91kU9oE1EQxuftbpqkmBRJKRYVih6iIEEELcYoBUF6EQ8lPWihtoInNVYQAhZKLRQiikgvRQ968KDtIRUKKpVWq6IHRaonUVs0BitRBJtkk+xmn9+sG9lG/eC382dnZt/OE1TThFS3fNK7LVKOSKKdkoSuSnWYFLNfNa2pynr/tfc94uefescRbMOpXCBoemarJMjUxLhHpacVw/pqyCbFp5Y6qVo+plliK2z/i6GWu/VD7Hjfue8bSUp74L8UG/4S7xjKLsWSH9e63/+voR1FEVAED0GWm+ITssF8+W6aSJ5Np8ILnFP44dI6+PPgObgKboIlMALEZLeorDH0uUA5n6r1uAewPwX2grcgCS4BAwyCM4ACpdaxgF6KJk8/a+PYrQMIcAG0DNz/2eXkv8Fq3JA8OjM92Hevj333CXZwAroPfjg+mzTgXYRAGyeCRuGGt2LYe7EnOuKjslZtGXEj8DjvdLsgvxLS1N/7d59gBu/4FzpBh9PAVecBD3gD7K82mYWuRrPoZd894DXiMaf4ASzfBC9zAJTBCUBzBy82Byt61FeWsxzXi7+YABnAp6mCJ2B3rXB+z8iFR7HR27XYvQPOcdMVh2bYEsjXij/vHw3lCnqrYjXwFa9WJpJolxsG/PV5jiVJJbPt1MnFSGL5w6bjTe4ae5W5cH+gSuotTVjbNUnXNaE8lsLKauRbMcxS3FCp1yRVCq/S27Iw/uqvAbVEcXNPVJHyMDa7iyzLUIRy2RDikCQr7V807gia5J2s0i8UIcDwgEVTwgAAAABJRU5ErkJggg==
[stackshare badge]: https://img.shields.io/badge/-tech%20stack-yellow?style=for-the-badge&logo=stackshare
[stackshare url]: https://stackshare.io/terminal-nerds/configs

## Project goal

🎯 The objective is to keep used **tool(s) configuration(s), which can be shared
and extendable** between the projects as an isolated, maintainable package,
added as a dependency. Thus, to save time configuring, installing, upgrading
plugins dependencies, etc.

---

## Packages

![workflow CI-CD badge]
[![CodeClimate issues badge]][codeclimate report]\
![node.js version support badge]
[![Dependencies badge]][dependencies url]

[codeclimate issues badge]: https://img.shields.io/codeclimate/issues/terminal-nerds/configs?logo=codeclimate&style=for-the-badge
[codeclimate report]: https://codeclimate.com/github/terminal-nerds/configs
[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/eslint-config?style=for-the-badge&logo=nodedotjs
[dependencies badge]: https://img.shields.io/librariesio/github/terminal-nerds/configs?style=for-the-badge
[dependencies url]: https://libraries.io/github/terminal-nerds/configs "Dependencies status"
[workflow ci-cd badge]: https://img.shields.io/github/workflow/status/terminal-nerds/configs/CI%20&%20CD?label=CI%20%26%20CD&logo=github&style=for-the-badge

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

[discord server]: https://discord.terminal-nerds.dev
[discord badge]: https://img.shields.io/discord/862890839537877012?label=Discord&logo=discord&style=for-the-badge

---

## Security

![workflow maintenance badge]\
[![lgtm alerts badge]][lgtm report]
![Snyk vulnerabilities badge]
[![SonarCloud badge]][sonarcloud report]

🔐 Our team has a shared [Security Policy]. If you have concerns or found an
issue, please follow the instructions, and
remember about one thing:

> We are all ears, but please, **DO NOT create a GitHub issue for reporting a
> vulnerability**.

[workflow maintenance badge]: https://img.shields.io/github/workflow/status/terminal-nerds/configs/Maintenance?label=Maintenance&logo=github&style=for-the-badge
[lgtm alerts badge]: https://img.shields.io/lgtm/alerts/github/terminal-nerds/configs?style=for-the-badge&logo=lgtm
[lgtm report]: https://lgtm.com/projects/g/terminal-nerds/configs
[snyk vulnerabilities badge]: https://img.shields.io/snyk/vulnerabilities/github/terminal-nerds/configs?logo=snyk&style=for-the-badge
[sonarcloud badge]: https://img.shields.io/sonar/quality_gate/terminal-nerds_configs/main?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge
[sonarcloud report]: https://sonarcloud.io/summary/overall?id=terminal-nerds_configs
[security policy]: https://github.com/terminal-nerds/configs/security/policy

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

### Project contributors

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
    <td align="center"><a href="https://snyk.io/"><img src="https://avatars.githubusercontent.com/u/19733683?v=4?s=60" width="60px;" alt=""/><br /><sub><b>Snyk bot</b></sub></a><br /><a href="#maintenance-snyk-bot" title="Maintenance">🚧</a> <a href="#security-snyk-bot" title="Security">🛡️</a> <a href="#tool-snyk-bot" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/Codesee-io"><img src="https://avatars.githubusercontent.com/u/59343751?v=4?s=60" width="60px;" alt=""/><br /><sub><b>CodeSee</b></sub></a><br /><a href="https://github.com/terminal-nerds/@terminal-nerds/configs/pulls?q=is%3Apr+reviewed-by%3ACodesee-io" title="Reviewed Pull Requests">👀</a> <a href="#tool-Codesee-io" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
