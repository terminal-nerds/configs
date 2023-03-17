# @terminal-nerds/prettier-config

![package version badge]

**Extendable ![prettier icon] [Prettier] configuration**, part of the
[terminal-nerds/configs] project.

[terminal-nerds/configs]: https://github.com/terminal-nerds/configs
[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/prettier-config/latest?style=for-the-badge&logo=npm
[prettier]: https://prettier.io
[prettier icon]: https://api.iconify.design/logos/prettier.svg
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported prettier version badge]][prettier]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/markdownlint-config?style=for-the-badge&logo=nodedotjs
[supported prettier version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/prettier?filename=packages%2Fprettier%2Fpackage.json&logo=prettier&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![prettier icon] [Prettier] version

[node.js]: https://nodejs.org/en/
[node.js icon]: https://api.iconify.design/logos/nodejs-icon.svg
[pnpm]: https://pnpm.io/
[pnpm icon]: https://api.iconify.design/vscode-icons/file-type-light-pnpm.svg
[npm]: https://npmjs.com/
[npm icon]: https://api.iconify.design/logos/npm-icon.svg
[yarn]: https://yarnpkg.com/
[yarn icon]: https://api.iconify.design/logos/yarn.svg

---

## Basic usage

👣 Follow the steps below:

1. **Install it with the ![node.js icon] [Node.js] package manager of your
   choice** _(in our case, we use ![pnpm icon] [pnpm])_.

    ```sh
     pnpm install --save-dev prettier @terminal-nerds/prettier-config
    ```

[node.js]: https://nodejs.org/en/
[`pnpm`]: https://pnpm.io/

1. **Create an ![prettier icon] [Prettier configuration file] - `.prettierrc.(c)js`**.

1. **Extend this module package configuration.**

    ```js
    /** @type import("prettier").Options */
    const config = {
    	...require("@terminal-nerds/prettier-config"),
    };

    module.exports = config;
    ```

📖 For [prettier icon] [Prettier CLI] usage, please refer to its documentation
_(we recommend to use [`pretty-quick`](pretty-quick) instead, for more
human-friendly output and performance)_.

[prettier configuration file]: https://prettier.io/docs/en/configuration.html
[prettier cli]: https://prettier.io/docs/en/cli.html
[pretty-quick]: https://github.com/azz/pretty-quick

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [Prettier] loads plugins options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/prettier-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2Fprettier-config

### Plugins

<!-- prettier-sort-markdown-table -->

| Plugin                        | Version                                      | Loading condition(s)        |
| ----------------------------- | -------------------------------------------- | --------------------------- |
| [prettier-plugin-jsdoc]       | ![prettier-plugin-jsdoc version badge]       | -                           |
| [prettier-plugin-svelte]      | ![prettier-plugin-svelte version badge]      | `svelte` as dependency      |
| [prettier-plugin-tailwindcss] | ![prettier-plugin-tailwindcss version badge] | `tailwindcss` as dependency |

[prettier-plugin-jsdoc]: https://github.com/hosseinmd/prettier-plugin-jsdoc
[prettier-plugin-svelte version badge]: https://img.shields.io/npm/v/prettier-plugin-svelte?logo=npm&style=flat-square
[prettier-plugin-svelte]: https://github.com/sveltejs/prettier-plugin-svelte
[prettier-plugin-svelte version badge]: https://img.shields.io/npm/v/prettier-plugin-svelte?logo=npm&style=flat-square
[prettier-plugin-tailwindcss]: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
[prettier-plugin-tailwindcss version badge]: https://img.shields.io/npm/v/prettier-plugin-tailwindcss?logo=npm&style=flat-square

---

## Security

[![workflow security badge]][security policy]

🔐 For more information, please refer to the [Security section] at the root of the
[terminal-nerds/configs] monorepo.

[workflow security badge]: https://img.shields.io/github/actions/workflow/status/terminal-nerds/configs/maintenance.yml?label=Security&logo=github&style=for-the-badge&branch=main
[security section]: https://github.com/terminal-nerds/configs#security
[security policy]: https://github.com/terminal-nerds/configs/security/policy

---

## Contributing

[![contributors badge]][contributors url]

🤝 **Contributions of any kind are welcome!**

Please refer to the monorepo _([terminal-nerds/configs])_ project's
[CONTRIBUTING file] for more information if you wish to get involved.

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
