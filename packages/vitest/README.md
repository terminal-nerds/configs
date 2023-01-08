# @terminal-nerds/vitest-config

![package version badge]

➡️ **Extendable ![vitest icon] [vitest] configuration**, part of the
[terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/vitest-config/latest?style=for-the-badge&logo=npm
[vitest]: https://vitest.dev/
[vitest icon]: https://api.iconify.design/logos/vitest.svg
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported vitest version badge]][vitest]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/vitest-config?style=for-the-badge&logo=nodedotjs
[supported vitest version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/vitest?filename=packages%2Fvitest%2Fpackage.json&logo=vitest&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![vitest icon] [vitest] version

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
     pnpm install --save-dev vitest @terminal-nerds/vitest-config
    ```

1. **Create a [vitest configuration file] - `vitest.config.ts`**.

1. **Import a specific [options] from this module package configuration and use it.**\
   NOTE: This one below is an example!

    ```ts
    import { WITH_COVERAGE_OPTIONS } from "@terminal-nerds/vitest-config";
    import { defineConfig } from "vitest/config";

    // https://vitest.dev/config/
    export default defineConfig({
    	test: {
    		...WITH_COVERAGE_OPTIONS,
    		// Override the config from there, if neccessary
    	},
    });
    ```

📖 For the [vitest CLI] usage, please refer to its documentation.

[options]: #available-options
[vitest configuration file]: https://vitest.dev/config/
[vitest cli]: https://vitest.dev/guide/cli.html

---

## Used extensions

| Extension             | Version                              | Loading condition(s) |
| --------------------- | ------------------------------------ | -------------------- |
| [@vitest/coverage-c8] | ![@vitest/coverage-c8 version badge] |                      |
| [@vitest/ui]          | ![@vitest/ui version badge]          |                      |

[@vitest/coverage-c8]: https://nextjs.org/docs/basic-features/eslint#eslint-config
[@vitest/coverage-c8 version badge]: https://img.shields.io/npm/v/@vitest/coverage-c8?logo=npm&style=flat-square
[@vitest/ui]: https://nextjs.org/docs/basic-features/eslint#eslint-config
[@vitest/ui version badge]: https://img.shields.io/npm/v/@vitest/ui?logo=npm&style=flat-square

---

## Available options

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/vitest-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2Fvitest-config

[![Dependencies badge]][dependencies url]

| Options                 | Purpose                                                       |
| ----------------------- | ------------------------------------------------------------- |
| `BASE_OPTIONS`          | **Base** options for general usage with Vitest                |
| `WITH_COVERAGE_OPTIONS` | Base options extended by options which uses a **c8 coverage** |

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
