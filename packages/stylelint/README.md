# @terminal-nerds/stylelint-config

![package version badge]
[![supported stylelint version badge]][stylelint]

[![Dependencies badge]][dependencies url]

➡️ **Extendable [Stylelint] configuration**, part of the [terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/stylelint-config/latest?style=for-the-badge&logo=npm
[supported stylelint version badge]: https://img.shields.io/npm/dependency-version/@terminal-nerds/stylelint-config/stylelint?style=for-the-badge&logo=stylelint
[stylelint]: https://stylelint.io/
[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/stylelint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%stylelint-config
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

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
         alt="stylelint logo icon"
         width="14"
         src="https://api.iconify.design/logos/stylelint.svg"
        />
   Latest [Stylelint] version

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
    pnpm install --save-dev stylelint @terminal-nerds/stylelint-config
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create an **[Stylelint configuration file]** - e.g. `.stylelint.(c)js`, and
   extend this module package configuration.\
   Example:

    ```js
    /** @type {import("stylelint").Config} */
    const config = {
    	extends: "@terminal-nerds/stylelint-config",
    };

    module.exports = config;
    ```

    For [Stylelint CLI] usage, please refer to its documentation.

    [stylelint configuration file]: https://stylelint.io/user-guide/configure
    [stylelint cli]: https://stylelint.io/user-guide/usage/cli

---

## Used configurations & plugins

⚙️ This configuration module for [Stylelint] loads configurations and plugins
options _conditionally_.

### Configurations

| Configurations                   | Loading condition(s)        |
| -------------------------------- | --------------------------- |
| [stylelint-config-prettier]      | `prettier` as dependency    |
| [stylelint-config-standard]      | **NO** `sass` as dependency |
| [stylelint-config-standard-scss] | `sass` as dependency        |

[stylelint-config-prettier]: https://github.com/prettier/stylelint-config-prettier
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss

### Plugins

| Plugin                                      | Loading condition(s) |
| ------------------------------------------- | -------------------- |
| [stylelint-high-performance-animation]      | -                    |
| [stylelint-no-unsupported-browser-features] | -                    |
| [stylelint-order]                           | -                    |
| [stylelint-scss]                            | `sass` as dependency |

[stylelint-high-performance-animation]: https://github.com/kristerkari/stylelint-high-performance-animation
[stylelint-no-unsupported-browser-features]: https://github.com/ismay/stylelint-no-unsupported-browser-features
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[stylelint-scss]: https://github.com/sveltejs/stylelint-plugin-svelte3

---

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [terminal-nerds/configs] monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License

---

## Resources

-   [Awesome Stylelint]

[awesome stylelint]: https://github.com/stylelint/awesome-stylelint
