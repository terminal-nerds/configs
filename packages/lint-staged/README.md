# @terminal-nerds/lint-staged-config

![package version badge]

➡️ **Extendable ![lint-staged icon] [lint-staged] configuration**, part of the
[terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/lint-staged-config/latest?style=for-the-badge&logo=npm
[lint-staged]: https://github.com/okonet/lint-staged#configuration
[lint-staged icon]: https://api.iconify.design/mdi/emoticon-poop.svg
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported lint-staged version badge]][lint-staged]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/lint-staged-config?style=for-the-badge&logo=nodedotjs
[supported lint-staged version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/lint-staged?filename=packages%2Flint-staged%2Fpackage.json&logo=lint-staged&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![lint-staged icon] [lint-staged] version

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
     pnpm install --save-dev lint-staged @terminal-nerds/lint-staged-config
    ```

1. **Create a [lint-staged configuration file] - `.lintstagedrc.js`**.

1. **Import the config from this package and use it.**

    ```ts
    import { CONFIG } from "@terminal-nerds/lint-staged-config";

    // https://github.com/okonet/lint-staged
    const config = {
    	...CONFIG,
    	// Apply more options from there, if neccessary
    };

    export default config;
    ```

📖 For the [lint-staged CLI] usage, please refer to its documentation.

[lint-staged configuration file]: https://github.com/okonet/lint-staged#configuration
[lint-staged cli]: https://github.com/okonet/lint-staged#command-line-flags

---

## Preconfigured groups

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/lint-staged-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2Flint-staged-config

[![Dependencies badge]][dependencies url]

| Matching group name                             | Loading condition                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `CODE_FORMAT` _(all)_                           | [`prettier`] or [pretty-quick] in dependencies                                                                 |
| `ESLINT` _(JavaScript, TypeScript, JSON, YAML)_ | [`eslint`] in dependencies                                                                                     |
| `MARKDOWN`                                      | [`markdownlint-cli`] in dependencies                                                                           |
| `PACKAGE_JSON` _(all `package.json` files)_     | [`depcheck`] or [`syncpack`] in dependencies                                                                   |
| `STYLESHEETS`                                   | [`stylelint`] in dependencies                                                                                  |
| `TYPESCRIPT`                                    | [`typescript`] in dependencies _(it will attempt find the correct `tsconfig.json` file for the type checking)_ |

[`prettier`]: https://github.com/prettier/prettier
[`pretty-quick`]: https://github.com/azz/pretty-quick
[`eslint`]: https://github.com/eslint/eslint
[`markdownlint-cli`]: https://github.com/igorshubovych/markdownlint-cli
[`depcheck`]: https://github.com/depcheck/depcheck
[`syncpack`]: https://github.com/JamieMason/syncpack
[`stylelint`]: https://github.com/stylelint/stylelint
[`typescript`]: https://github.com/microsoft/typescript

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
