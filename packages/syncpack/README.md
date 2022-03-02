# @terminal-nerds/syncpack-config

![package version badge]

➡️ **Extendable [syncpack] configuration**, part of the
[terminal-nerds/configs] project.

[terminal-nerds/configs]: https://github.com/terminal-nerds/configs
[package version badge]: https://img.shields.io/npm/v/@terminal-nerds/syncpack-config/latest?style=for-the-badge&logo=npm
[syncpack]: https://github.com/JamieMason/syncpack
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported syncpack version badge]][syncpack cli]

[node.js version support badge]: https://img.shields.io/node/v-lts/@terminal-nerds/syncpack-config?style=for-the-badge&logo=nodedotjs
[supported syncpack version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/peer/syncpack?filename=packages%2Fsyncpack%2Fpackage.json&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest [syncpack] version

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
     pnpm install --save-dev syncpack @terminal-nerds/syncpack-config
    ```

1. **Create an [syncpack configuration file] - `.syncpackrc.(c)js`**.

1. **Extend this module package configuration.**

    ```js
    const config = {
    	...require("@terminal-nerds/syncpack-config"),
    };

    module.exports = config;
    ```

📖 For the [syncpack CLI] usage, please refer to its documentation.

[syncpack configuration file]: https://github.com/JamieMason/syncpack#-configuration-file
[syncpack cli]: https://github.com/JamieMason/syncpack#-commands

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

None, so far.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@terminal-nerds/syncpack-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@terminal-nerds%2Fsyncpack-config

---

## Security

[![workflow security badge]][security policy]

🔐 For more information, please refer to the [Security section] at the root of the
[terminal-nerds/configs] monorepo.

[workflow security badge]: https://img.shields.io/github/workflow/status/terminal-nerds/configs/Maintenance?label=Security&logo=github&style=for-the-badge
[security section]: https://github.com/terminal-nerds/configs#security
[security policy]: https://github.com/terminal-nerds/configs/security/policy

---

## Contributing

[![contributors badge]][contributors url]

🤝 **Contributions of any kind are welcome!**

Please refer to our [CONTRIBUTING file]
_(at the root of this project repository - [terminal-nerds/configs])_
for more information if you wish to get involved.

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
