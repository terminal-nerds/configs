# @terminal-nerds/prettier-config

![package version badge]
[![Dependencies badge]][dependencies url]

**Extendable [Prettier] configuration**, part of the [terminal-nerds/configs] project.

[terminal-nerds/configs]: https://github.com/terminal-nerds/configs
[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/prettier-config/latest?style=for-the-badge&logo=npm
[prettier]: https://prettier.io
[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/prettier-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%prettier-config
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

## Used plugins

⚙️ This configuration module for [Prettier] loads plugins options _conditionally_.

| Plugin                   | Version                                 | Loading condition(s)   |
| ------------------------ | --------------------------------------- | ---------------------- |
| [prettier-plugin-svelte] | ![prettier-plugin-svelte version badge] | `svelte` as dependency |

[prettier-plugin-svelte]: https://github.com/sveltejs/prettier-plugin-svelte
[prettier-plugin-svelte version badge]: https://img.shields.io/npm/v/prettier-plugin-svelte?logo=npm&style=flat-square

---

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [terminal-nerds/configs] monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License
