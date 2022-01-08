# @terminal-nerds/config-markdownlint

![package version badge]\
![supported markdownlint version badge]

**Extendable [markdownlint] configuration**, part of the
[terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Fmarkdownlint%2Fpackage.json&style=for-the-badge
[supported markdownlint version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/markdownlint?filename=packages%2Fmarkdownlint%2Fpackage.json&style=for-the-badge
[markdownlint]: https://github.com/DavidAnson/markdownlint
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

This configuration package require these tools to use locally on your
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

[node.js]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/

---

## Basic usage

⚙️ Follow the steps below:

1. Install it with the [Node.js] package manager of your choice. In our case,
   we use [`pnpm`](pnpm).\
   Example:

    ```sh
     pnpm install --save-dev markdownlint-cli @terminal-nerds/config-markdownlint
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create a **[markdownlint configuration file]** - `.markdownlint.json`, and
   extend this module package configuration.\
   Example:

    ```json
    {
    	"$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
    	"extends": "@terminal-nerds/config-markdownlint"
    }
    ```

    For [markdownlint CLI] usage, please refer to its documentation.

    [markdownlint configuration file]: https://github.com/DavidAnson/markdownlint#optionsconfig
    [markdownlint cli]: https://github.com/igorshubovych/markdownlint-cli

---

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License
