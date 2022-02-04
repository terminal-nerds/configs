# @terminal-nerds/stylelint-config

![package version badge]

➡️ **Extendable [Stylelint] configuration**, part of the
[terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/stylelint-config/latest?style=for-the-badge&logo=npm
[stylelint]: https://stylelint.io/
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

![node.js version support badge]
[![supported stylelint version badge]][stylelint]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/markdownlint-config?style=for-the-badge&logo=nodedotjs
[supported stylelint version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/stylelint?filename=packages%2Fstylelint%2Fpackage.json&logo=stylelint&style=for-the-badge

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

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [Stylelint] loads configurations and plugins
options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/stylelint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%stylelint-config

### Configurations

| Configurations                   | Version                                    | Loading condition(s)        |
| -------------------------------- | ------------------------------------------ | --------------------------- |
| [stylelint-config-prettier]      | ![stylelint-config-prettier version badge] | `prettier` as dependency    |
| [stylelint-config-standard]      | ![stylelint-config-prettier version badge] | **NO** `sass` as dependency |
| [stylelint-config-standard-scss] | ![stylelint-config-prettier version badge] | `sass` as dependency        |

[stylelint-config-prettier]: https://github.com/prettier/stylelint-config-prettier
[stylelint-config-prettier version badge]: https://img.shields.io/npm/v/stylelint-config-prettier?logo=npm&style=flat-square
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard version badge]: https://img.shields.io/npm/v/stylelint-config-standard?logo=npm&style=flat-square
[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss
[stylelint-config-standard-scss version badge]: https://img.shields.io/npm/v/stylelint-config-standard-scss?logo=npm&style=flat-square

### Plugins

| Plugin                                      | Version                                                    | Loading condition(s) |
| ------------------------------------------- | ---------------------------------------------------------- | -------------------- |
| [stylelint-high-performance-animation]      | ![stylelint-high-performance-animation version badge]      | -                    |
| [stylelint-no-unsupported-browser-features] | ![stylelint-no-unsupported-browser-features version badge] | -                    |
| [stylelint-order]                           | ![stylelint-order version badge]                           | -                    |
| [stylelint-scss]                            | ![stylelint-scss version badge]                            | `sass` as dependency |

[stylelint-high-performance-animation]: https://github.com/kristerkari/stylelint-high-performance-animation
[stylelint-high-performance-animation version badge]: https://img.shields.io/npm/v/stylelint-high-performance-animation?logo=npm&style=flat-square
[stylelint-no-unsupported-browser-features]: https://github.com/ismay/stylelint-no-unsupported-browser-features
[stylelint-no-unsupported-browser-features version badge]: https://img.shields.io/npm/v/stylelint-no-unsupported-browser-features?logo=npm&style=flat-square
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[stylelint-order version badge]: https://img.shields.io/npm/v/stylelint-order?logo=npm&style=flat-square
[stylelint-scss]: https://github.com/sveltejs/stylelint-plugin-svelte3
[stylelint-scss version badge]: https://img.shields.io/npm/v/stylelint-scss?logo=npm&style=flat-square

---

## Security

[![lgtm alerts badge]][lgtm report]
[![lgtm grade badge]][lgtm report]

🔐 Our team has a shared [Security Policy]. If you have concerns or found an
issue, please follow the instructions, and
remember about one thing:

> We are all ears, but please, **DO NOT create a GitHub issue for reporting a
> vulnerability**.

[security policy]: https://github.com/terminal-nerds/configs/security/policy
[lgtm alerts badge]: https://img.shields.io/lgtm/alerts/github/terminal-nerds/configs?style=for-the-badge&logo=lgtm
[lgtm grade badge]: https://img.shields.io/lgtm/grade/javascript/github/terminal-nerds/configs?style=for-the-badge&logo=lgtm
[lgtm report]: https://lgtm.com/projects/g/terminal-nerds/configs

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

---

## Resources

-   [Awesome Stylelint]

[awesome stylelint]: https://github.com/stylelint/awesome-stylelint
