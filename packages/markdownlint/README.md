# @terminal-nerds/markdownlint-config

![package version badge]
[![Dependencies badge]][dependencies url]

➡️ **Extendable [markdownlint] configuration**, part of the
[terminal-nerds/configs] project.

[terminal-nerds/configs]: https://github.com/terminal-nerds/configs
[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/markdownlint-config/latest?style=for-the-badge&logo=npm
[markdownlint]: https://github.com/DavidAnson/markdownlint
[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/markdownlint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%markdownlint-config
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

![node.js version support badge]
[![supported markdownlint-cli version badge]][markdownlint cli]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/markdownlint-config?style=for-the-badge&logo=nodedotjs
[supported markdownlint-cli version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/markdownlint-cli?filename=packages%2Fmarkdownlint%2Fpackage.json&logo=markdown&style=for-the-badge

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
         alt="markdownlint logo icon"
         width="14"
         src="https://api.iconify.design/logos/markdown.svg"
        />
   Latest [markdownlint CLI] version

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
     pnpm install --save-dev markdownlint-cli @terminal-nerds/markdownlint-config
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create a **[markdownlint configuration file]** - `.markdownlint.json`, and
   extend this module package configuration.\
   Example:

    ```json
    {
    	"$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
    	"extends": "@terminal-nerds/markdownlint-config"
    }
    ```

    For [markdownlint CLI] usage, please refer to its documentation.

    [markdownlint configuration file]: https://github.com/DavidAnson/markdownlint#optionsconfig
    [markdownlint cli]: https://github.com/igorshubovych/markdownlint-cli

---

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [terminal-nerds/configs] monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License
