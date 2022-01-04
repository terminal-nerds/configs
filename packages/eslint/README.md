# @terminal-nerds/config-eslint

![package version badge]\
![supported eslint version badge]

**Extendable [ESLint] configuration**, part of the [terminal-nerds/configs] project.

[package version badge]: https://img.shields.io/github/package-json/v/terminal-nerds/configs?filename=packages%2Feslint%2Fpackage.json&style=for-the-badge
[supported eslint version badge]: https://img.shields.io/github/package-json/dependency-version/terminal-nerds/configs/prettier?filename=packages%2Feslint%2Fpackage.json&style=for-the-badge
[eslint]: https://eslint.org/
[terminal-nerds/configs]: https://github.com/terminal-nerds/configs

---

## Used configurations & plugins

ℹ️ This configuration module for [ESLint] loads configurations and plugins
options _conditionally_.

### Configurations

| Configurations           | Loading condition(s)     |
| ------------------------ | ------------------------ |
| [eslint-config-prettier] | `prettier` as dependency |

[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier

### Plugins

| Plugin                             | Loading condition(s)                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------ |
| [eslint-plugin-svelte3]            | `svelte` as dependency                                                         |
| [@typescript-eslint/eslint-plugin] | `typescript` as dependency                                                     |
| [eslint-plugin-diff]               | `NODE_ENV` === `"ci"`, `"continuous integration"` , `"continuous-integration"` |

[eslint-plugin-svelte3]: https://github.com/sveltejs/eslint-plugin-svelte3
[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[eslint-plugin-diff]: https://github.com/paleite/eslint-plugin-diff

-   [eslint-plugin-compat]
-   [eslint-plugin-import]
-   [eslint-plugin-json-schema-validator]
-   [eslint-plugin-jsonc]
-   [eslint-plugin-node]
-   [eslint-plugin-regexp]
-   [eslint-plugin-sonarjs]
-   [eslint-plugin-unicorn]
-   [eslint-plugin-yml]

[eslint-plugin-compat]: https://github.com/amilajack/eslint-plugin-compat
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-json-schema-validator]: https://github.com/ota-meshi/eslint-plugin-json-schema-validator
[eslint-plugin-jsonc]: https://github.com/ota-meshi/eslint-plugin-jsonc
[eslint-plugin-node]: https://github.com/mysticatea/eslint-plugin-node
[eslint-plugin-regexp]: https://github.com/ota-meshi/eslint-plugin-regexp
[eslint-plugin-sonarjs]: https://github.com/SonarSource/eslint-plugin-sonarjs
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[eslint-plugin-yml]: https://github.com/ota-meshi/eslint-plugin-yml

---

## Basic usage

⚙️ Follow the steps below:

1. Install it with the [Node.js] package manager of your choice. In our case,
   we use [`pnpm`](pnpm).\
   Example:

    ```sh
    pnpm install --save-dev eslint @terminal-nerds/config-eslint
    ```

    [node.js]: https://nodejs.org/en/
    [`pnpm`]: https://pnpm.io/

1. Create an **[ESLint configuration file]** - e.g. `.eslint.(c)js`, and extend
   this module package configuration.\
   Example:

    ```js
    const config = {
		extends: "./node_modules/@terminal-nerds/config-eslint",

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

## License

[![license badge]][license]

⚖️ For more information, please refer to [License section] in the root of the monorepo.

[license badge]: https://img.shields.io/github/license/terminal-nerds/configs?style=for-the-badge
[license]: https://github.com/terminal-nerds/configs/blob/main/LICENSE.md
[license section]: https://github.com/terminal-nerds/configs#License

---

## Resources

-   [Awesome ESLint]

[awesome eslint]: https://github.com/dustinspecker/awesome-eslint
