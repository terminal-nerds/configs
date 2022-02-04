# @terminal-nerds/eslint-config

![package version badge]

➡️ **Extendable [ESLint] configuration**, part of the [terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/eslint-config/latest?style=for-the-badge&logo=npm
[eslint]: https://eslint.org/
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

![node.js version support badge]
[![supported eslint version badge]][eslint]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/eslint-config?style=for-the-badge&logo=nodedotjs
[supported eslint version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/eslint?filename=packages%2Feslint%2Fpackage.json&logo=eslint&style=for-the-badge

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
         alt="eslint logo icon"
         width="14"
         src="https://api.iconify.design/logos/eslint.svg"
        />
   Latest [ESLint] version

[node.js]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/eslint-config?style=for-the-badge&logo=nodedotjs

---

## Basic usage

👣 Follow the steps below:

1. Install it with the [Node.js] package manager of your choice. In our case,
   we use [`pnpm`](pnpm).\
   Example:

    ```sh
    pnpm add --save-dev eslint @terminal-nerds/eslint-config
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create an **[ESLint configuration file]** - e.g. `.eslint.(c)js`, and extend
   this module package configuration.\
   Example:

    ```js
    const config = {
    	extends: "@terminal-nerds",

    	env: {
    		// Specify the environment(s)
    		// https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    		browser: true,
    		node: true,
    	},
    };

    module.exports = config;
    ```

    For [ESLint CLI] usage, please refer to its documentation.

    [eslint configuration file]: https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files
    [eslint cli]: https://eslint.org/docs/user-guide/command-line-interface

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [ESLint] loads configurations and plugins
options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/eslint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2eslint-config

### Configurations

| Configurations           | Version                                 | Loading condition(s)     |
| ------------------------ | --------------------------------------- | ------------------------ |
| [eslint-config-prettier] | ![eslint-config-prettier version badge] | `prettier` as dependency |

[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[eslint-config-prettier version badge]: https://img.shields.io/npm/v/eslint-config-prettier?logo=npm&style=flat-square

### Plugins

| Plugin                                | Version                                              | Loading condition(s)                                                         |
| ------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| [@typescript-eslint/eslint-plugin]    | ![@typescript-eslint/eslint-plugin version badge]    | `typescript` as dependency                                                   |
| [eslint-plugin-compat]                | ![eslint-plugin-compat version badge]                | -                                                                            |
| [eslint-plugin-diff]                  | ![eslint-plugin-diff version badge]                  | Set one of environment variables: `CI` or `CONTINUOUS_INTEGRATION` to `true` |
| [eslint-plugin-import]                | ![eslint-plugin-import version badge]                | -                                                                            |
| [eslint-plugin-json-schema-validator] | ![eslint-plugin-json-schema-validator version badge] | -                                                                            |
| [eslint-plugin-jsonc]                 | ![eslint-plugin-jsonc version badge]                 | -                                                                            |
| [eslint-plugin-node]                  | ![eslint-plugin-node version badge]                  | -                                                                            |
| [eslint-plugin-regexp]                | ![eslint-plugin-regexp version badge]                | -                                                                            |
| [eslint-plugin-sonarjs]               | ![eslint-plugin-sonarjs version badge]               | -                                                                            |
| [eslint-plugin-svelte3]               | ![eslint-plugin-svelte3 version badge]               | `svelte` as dependency                                                       |
| [eslint-plugin-unicorn]               | ![eslint-plugin-unicorn version badge]               | -                                                                            |
| [eslint-plugin-yml]                   | ![eslint-plugin-yml version badge]                   | -                                                                            |

[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[@typescript-eslint/eslint-plugin version badge]: https://img.shields.io/npm/v/@typescript-eslint/eslint-plugin?logo=npm&style=flat-square
[eslint-plugin-compat]: https://github.com/amilajack/eslint-plugin-compat
[eslint-plugin-compat version badge]: https://img.shields.io/npm/v/eslint-plugin-compat?logo=npm&style=flat-square
[eslint-plugin-diff]: https://github.com/paleite/eslint-plugin-diff
[eslint-plugin-diff version badge]: https://img.shields.io/npm/v/eslint-plugin-diff?logo=npm&style=flat-square
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-import version badge]: https://img.shields.io/npm/v/eslint-plugin-import?logo=npm&style=flat-square
[eslint-plugin-json-schema-validator]: https://github.com/ota-meshi/eslint-plugin-json-schema-validator
[eslint-plugin-json-schema-validator version badge]: https://img.shields.io/npm/v/eslint-plugin-json-schema-validator?logo=npm&style=flat-square
[eslint-plugin-jsonc]: https://github.com/ota-meshi/eslint-plugin-jsonc
[eslint-plugin-jsonc version badge]: https://img.shields.io/npm/v/eslint-plugin-jsonc?logo=npm&style=flat-square
[eslint-plugin-node]: https://github.com/mysticatea/eslint-plugin-node
[eslint-plugin-node version badge]: https://img.shields.io/npm/v/eslint-plugin-node?logo=npm&style=flat-square
[eslint-plugin-regexp]: https://github.com/ota-meshi/eslint-plugin-regexp
[eslint-plugin-regexp version badge]: https://img.shields.io/npm/v/eslint-plugin-regexp?logo=npm&style=flat-square
[eslint-plugin-sonarjs]: https://github.com/SonarSource/eslint-plugin-sonarjs
[eslint-plugin-sonarjs version badge]: https://img.shields.io/npm/v/eslint-plugin-sonarjs?logo=npm&style=flat-square
[eslint-plugin-svelte3]: https://github.com/sveltejs/eslint-plugin-svelte3
[eslint-plugin-svelte3 version badge]: https://img.shields.io/npm/v/eslint-plugin-svelte3?logo=npm&style=flat-square
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[eslint-plugin-unicorn version badge]: https://img.shields.io/npm/v/eslint-plugin-unicorn?logo=npm&style=flat-square
[eslint-plugin-yml]: https://github.com/ota-meshi/eslint-plugin-yml
[eslint-plugin-yml version badge]: https://img.shields.io/npm/v/eslint-plugin-yml?logo=npm&style=flat-square

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

-   [Awesome ESLint]

[awesome eslint]: https://github.com/dustinspecker/awesome-eslint
