# @terminal-nerds/prettier-config

![package version badge]

**Extendable [Prettier] configuration**, part of the [terminal-nerds/configs] project.

[terminal-nerds/configs]: https://github.com/terminal-nerds/configs
[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/prettier-config/latest?style=for-the-badge&logo=npm
[prettier]: https://prettier.io
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

![node.js version support badge]
[![supported prettier version badge]][prettier]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/markdownlint-config?style=for-the-badge&logo=nodedotjs
[supported prettier version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/prettier?filename=packages%2Fprettier%2Fpackage.json&logo=prettier&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. <img
      alt="Node.JS logo icon"
      width="14"
      src="https://api.iconify.design/logos/nodejs-icon.svg"
   />
   Latest [Node.js] LTS _(Long-Term Support)_ version.

1. One of Node.js package managers:

    - <img
             alt="pnpm logo icon"
             width="14"
             src="https://api.iconify.design/vscode-icons/file-type-light-pnpm.svg"
          />
      [pnpm]

    - <img
            alt="yarn logo icon"
            width="14"
            src="https://api.iconify.design/logos/yarn.svg"
           />
      [yarn]

    - <img
          alt="npm logo icon"
          width="14"
          src="https://api.iconify.design/logos/npm-icon.svg"
         />
      [npm]

1. <img
         alt="prettier logo icon"
         width="14"
         src="https://api.iconify.design/logos/prettier.svg"
        />
   Latest [Prettier] version

[node.js]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/

---

## Basic usage

👣 Follow the steps below:

1. Install it with the [Node.js] package manager of your choice. In our case,
   we use [`pnpm`](pnpm).\
   Example:

    ```sh
    pnpm install --save-dev prettier @terminal-nerds/prettier-config
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create a **[Prettier configuration file]** - e.g. `.prettierrc.(c)js`, and extend
   this module package configuration.\
   Example:

    ```js
    /** @type import("prettier").Options */
    const config = {
    	...require("@terminal-nerds/prettier-config"),
    };

    module.exports = config;
    ```

    For [Prettier CLI] usage, please refer to its documentation.\
     We recommend to use [`pretty-quick`](pretty-quick) instead, for more
    human-friendly output and performance.

    [prettier configuration file]: https://prettier.io/docs/en/configuration.html
    [prettier cli]: https://prettier.io/docs/en/cli.html
    [pretty-quick]: https://github.com/azz/pretty-quick

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [Prettier] loads plugins options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/prettier-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%prettier-config

### Plugins

| Plugin                   | Version                                 | Loading condition(s)   |
| ------------------------ | --------------------------------------- | ---------------------- |
| [prettier-plugin-svelte] | ![prettier-plugin-svelte version badge] | `svelte` as dependency |

[prettier-plugin-svelte]: https://github.com/sveltejs/prettier-plugin-svelte
[prettier-plugin-svelte version badge]: https://img.shields.io/npm/v/prettier-plugin-svelte?logo=npm&style=flat-square

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

Please refer to our [CONTRIBUTING file]
_(at the root of this project repository - [terminal-nerds/configs])_
for more information if you wish to get involved.

[all-contributors]: https://github.com/all-contributors/all-contributors
[contributing file]: https://github.com/terminal-nerds/configs/blob/main/.github/CONTRIBUTING.md
[contributors badge]: https://img.shields.io/github/contributors/terminal-nerds/configs?style=for-the-badge
[contributors url]: https://github.com/terminal-nerds/configs#contributors

---

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [terminal-nerds/configs] monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License
