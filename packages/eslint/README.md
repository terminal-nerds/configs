# @terminal-nerds/eslint-config

![package version badge]
[![supported eslint version badge]][eslint]

[![Dependencies badge]][dependencies url]

➡️ **Extendable [ESLint] configuration**, part of the [terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/eslint-config/latest?style=for-the-badge&logo=npm
[supported eslint version badge]: https://img.shields.io/npm/dependency-version/@terminal-nerds/eslint-config/eslint?style=for-the-badge&logo=eslint
[eslint]: https://eslint.org/
[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/eslint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2eslint-config
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

⚙️ This configuration module for [ESLint] loads configurations and plugins
options _conditionally_.

### Configurations

| Configurations           | Loading condition(s)     |
| ------------------------ | ------------------------ |
| [eslint-config-prettier] | `prettier` as dependency |

[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier

### Plugins

| Plugin                                | Loading condition(s)                                                         |
| ------------------------------------- | ---------------------------------------------------------------------------- |
| [@typescript-eslint/eslint-plugin]    | `typescript` as dependency                                                   |
| [eslint-plugin-compat]                | -                                                                            |
| [eslint-plugin-diff]                  | Set one of environment variables: `CI` or `CONTINUOUS_INTEGRATION` to `true` |
| [eslint-plugin-import]                | -                                                                            |
| [eslint-plugin-json-schema-validator] | -                                                                            |
| [eslint-plugin-jsonc]                 | -                                                                            |
| [eslint-plugin-node]                  | -                                                                            |
| [eslint-plugin-regexp]                | -                                                                            |
| [eslint-plugin-sonarjs]               | -                                                                            |
| [eslint-plugin-svelte3]               | `svelte` as dependency                                                       |
| [eslint-plugin-unicorn]               | -                                                                            |
| [eslint-plugin-yml]                   | -                                                                            |

[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[eslint-plugin-diff]: https://github.com/paleite/eslint-plugin-diff
[eslint-plugin-compat]: https://github.com/amilajack/eslint-plugin-compat
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-json-schema-validator]: https://github.com/ota-meshi/eslint-plugin-json-schema-validator
[eslint-plugin-jsonc]: https://github.com/ota-meshi/eslint-plugin-jsonc
[eslint-plugin-node]: https://github.com/mysticatea/eslint-plugin-node
[eslint-plugin-regexp]: https://github.com/ota-meshi/eslint-plugin-regexp
[eslint-plugin-sonarjs]: https://github.com/SonarSource/eslint-plugin-sonarjs
[eslint-plugin-svelte3]: https://github.com/sveltejs/eslint-plugin-svelte3
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[eslint-plugin-yml]: https://github.com/ota-meshi/eslint-plugin-yml

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
