# @terminal-nerds/markdownlint-config

![package version badge]

➡️ **Extendable ![markdownlint icon] [markdownlint] configuration**, part of the
[terminal-nerds/configs] project.

[terminal-nerds/configs]: https://github.com/terminal-nerds/configs
[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/markdownlint-config/latest?style=for-the-badge&logo=npm
[markdownlint]: https://github.com/DavidAnson/markdownlint
[markdownlint icon]: https://api.iconify.design/logos/markdown.svg
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported markdownlint-cli version badge]][markdownlint cli]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/markdownlint-config?style=for-the-badge&logo=nodedotjs
[supported markdownlint-cli version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/markdownlint-cli?filename=packages%2Fmarkdownlint%2Fpackage.json&logo=markdown&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![markdownlint icon] [markdownlint CLI] version

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
     pnpm install --save-dev markdownlint-cli @terminal-nerds/markdownlint-config
    ```

1. **Create a ![markdownlint icon] [markdownlint configuration file] - `.markdownlint.json`**.

1. **Extend this module package configuration.**

    ```json
    {
    	"$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
    	"extends": "@terminal-nerds/markdownlint-config"
    }
    ```

📖 For the ![markdownlint icon] [markdownlint CLI] usage, please refer to its
documentation.

[markdownlint configuration file]: https://github.com/DavidAnson/markdownlint#optionsconfig
[markdownlint cli]: https://github.com/igorshubovych/markdownlint-cli

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

None, so far.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/markdownlint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2Fmarkdownlint-config

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
