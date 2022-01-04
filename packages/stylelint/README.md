# @terminal-nerds/config-stylelint

![package version badge]\
![supported stylelint version badge]

**Extendable [Stylelint] configuration**, part of the [terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Fstylelint%2Fpackage.json&style=for-the-badge
[supported stylelint version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/prettier?filename=packages%2Fstylelint%2Fpackage.json&style=for-the-badge
[stylelint]: https://stylelint.io/
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Used configurations & plugins

ℹ️ This configuration module for [Stylelint] loads configurations and plugins
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

| Plugin           | Loading condition(s) |
| ---------------- | -------------------- |
| [stylelint-scss] | `sass` as dependency |

[stylelint-scss]: https://github.com/sveltejs/stylelint-plugin-svelte3

-   [stylelint-high-performance-animation]
-   [stylelint-no-unsupported-browser-features]
-   [stylelint-order]

[stylelint-high-performance-animation]: https://github.com/kristerkari/stylelint-high-performance-animation
[stylelint-no-unsupported-browser-features]: https://github.com/ismay/stylelint-no-unsupported-browser-features
[stylelint-order]: https://github.com/hudochenkov/stylelint-order

---

## Basic usage

⚙️ Follow the steps below:

1. Install it with the [Node.js] package manager of your choice. In our case,
   we use [`pnpm`](pnpm).\
   Example:

    ```sh
    pnpm install --save-dev stylelint @terminal-nerds/config-stylelint
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create an **[Stylelint configuration file]** - e.g. `.stylelint.(c)js`, and
   extend this module package configuration.\
   Example:

    ```js
    /** @type {import("stylelint").Config} */
    const config = {
    	extends: "@terminal-nerds/config-stylelint",

    	rules: {
    		// Tweak the rules here...
    	},
    };

    module.exports = config;
    ```

    For [Stylelint CLI] usage, please refer to its documentation.

    [stylelint configuration file]: https://stylelint.io/user-guide/configure
    [stylelint cli]: https://stylelint.io/user-guide/usage/cli

---

## License

[![license badge]][license]

⚖️ For more information, please refer to  the [License section] at the root of
the monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License

---

## Resources

-   [Awesome Stylelint]

[awesome stylelint]: https://github.com/stylelint/awesome-stylelint
