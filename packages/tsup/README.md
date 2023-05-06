# @terminal-nerds/tsup-config

![package version badge]

➡️ **Extendable [tsup] configuration**, part of the
[terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/tsup-config/latest?style=for-the-badge&logo=npm
[tsup]: https://tsup.egoist.dev/
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported tsup version badge]][tsup]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/tsup-config?style=for-the-badge&logo=nodedotjs
[supported tsup version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/tsup?filename=packages%2Ftsup%2Fpackage.json&logo=tsup&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest [tsup] version

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
     pnpm install --save-dev tsup @terminal-nerds/tsup-config
    ```

1. **Create a [tsup configuration file] - `tsup.config.ts`**.

1. **Use a specific [configuration target], and use it.**\

    ```ts
    import { defineConfig } from "tsup";

    import { getOptions } from "@terminal-nerds/tsup-config";

    export default defineConfig((options) => ({
    	...getOptions("universal", options),
    	entry: ["./source/**/*.ts"],
    }));
    ```

📖 For the [tsup CLI] usage, please refer to its documentation.

[configuration targets]: #available-targets
[tsup configuration file]: https://tsup.egoist.dev/#using-custom-configuration
[tsup cli]: https://tsup.egoist.dev/#usage

---

## Available targets

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/tsup-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2Ftsup-config

[![Dependencies badge]][dependencies url]

| Name        | Purpose                                                                   |
| ----------- | ------------------------------------------------------------------------- |
| `browser`   | For building a package, which will be used only in browser                |
| `cjs`       | For building a Node.js package in **CommonJS** format                     |
| `esm`       | For building a Node.js package in **ES Modules** format                   |
| `universal` | For building a Node.js package in both **CommonJS and ES Modules** format |

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
