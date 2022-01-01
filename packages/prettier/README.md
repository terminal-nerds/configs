# @terminal-nerds/config-prettier

![package version badge]\
![supported prettier version badge]

**Extendable [Prettier] configuration**, part of the [terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Fprettier%2Fpackage.json&style=for-the-badge
[supported prettier version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/prettier?filename=packages%2Fprettier%2Fpackage.json&style=for-the-badge
[prettier]: https://prettier.io
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Used plugins

This configuration module for [Prettier] loads plugins options _conditionally_.

| Plugin                   | Loading condition(s)   |
| ------------------------ | ---------------------- |
| [prettier-plugin-svelte] | `svelte` as dependency |

[prettier-plugin-svelte]: https://github.com/sveltejs/prettier-plugin-svelte

---

## Basic usage

1. Install it with the [Node.js] package manager of your choice. In our case,
   we use [`pnpm`](pnpm) .\
   Example:

    ```sh
    pnpm install --save-dev prettier @terminal-nerds/config-prettier
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create a **[Prettier configuration file]** - e.g. `.prettierrc.(c)js`, and extend
   this module package configuration.\
   Example:

    ```js
    /** @type import("prettier").Options */
    const config = {
    	...require("@terminal-nerds/config-prettier"),

    	// tweak some options here, refer to the link below:
    	// https://prettier.io/docs/en/index.html
    };

    module.exports = config;
    ```

    For [Prettier CLI] usage, please refer to their documentation.

    We recommend to use [`pretty-quick`](pretty-quick) instead, for more
    human-friendly output and performance.

    [prettier configuration file]: https://prettier.io/docs/en/configuration.html
    [prettier cli]: https://prettier.io/docs/en/cli.html
    [pretty-quick]: https://github.com/azz/pretty-quick

---

## License

[![license badge]][license]

For moree information, please refer to [License section] in the root of the monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License
