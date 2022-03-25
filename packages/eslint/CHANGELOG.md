# @terminal-nerds/eslint-config<!-- markdownlint-disable line-length list-marker-space no-duplicate-header ul-style ul-indent no-bare-urls -->

## 0.8.0

### Minor Changes

-   [#112](https://github.com/terminal-nerds/configs/pull/112) [`8c3551d`](https://github.com/terminal-nerds/configs/commit/8c3551db3fd6c0a0fa8f24ee9a3253d7e3f743f5) Thanks [@xeho91](https://github.com/xeho91)! - ✨ Add support for [Jest] or [Vitest] by adding new plugins and their recommended configuration:

    -   [eslint-plugin-jest]
    -   [eslint-plugin-jest-formatting]

    [jest]: https://jestjs.io/
    [vitest]: https://vitest.dev/
    [eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
    [eslint-plugin-jest-formatting]: https://github.com/dangreenisrael/eslint-plugin-jest-formatting

*   [#115](https://github.com/terminal-nerds/configs/pull/115) [`0e427cd`](https://github.com/terminal-nerds/configs/commit/0e427cdedf06f5172f3a7fe1c7248212d345f7e0) Thanks [@xeho91](https://github.com/xeho91)! - 🔧 Add `jsx-runtime` to the extended configs of `eslint-plugin-react` and setup
    automatic detection of react version.

-   [#114](https://github.com/terminal-nerds/configs/pull/114) [`49b927d`](https://github.com/terminal-nerds/configs/commit/49b927d9d40d6c9b642dccc1b5618493f47b8468) Thanks [@xeho91](https://github.com/xeho91)! - ✨ Added support for [Testing Library] by adding new plugins and extending their
    recommended configurations:

    -   [eslint-plugin-jest-dom]
    -   [eslint-plugin-testing-library]

    [testing library]: https://testing-library.com/
    [eslint-plugin-jest-dom]: https://github.com/testing-library/eslint-plugin-jest-dom
    [eslint-plugin-testing-library]: https://github.com/testing-library/eslint-plugin-testing-library

## 0.7.0

### Minor Changes

-   [#109](https://github.com/terminal-nerds/configs/pull/109) [`0a7be31`](https://github.com/terminal-nerds/configs/commit/0a7be317f5747c0a1a658b96824597a294324cd6) Thanks [@renovate](https://github.com/apps/renovate)! - ⬆️ Update ESLint dependencies:

    -   `@rushstack/eslint-patch` - `1.1.0` -> `1.1.1`
    -   `@typescript-eslint/eslint-plugin` - `5.10.2` -> `5.16.0`
    -   `@typescript-eslint/parser` - `5.10.2` -> `5.16.0`
    -   `eslint-config-prettier` - `8.3.0` -> `8.5.0`
    -   `eslint-define-config` - `1.2.4` -> `1.3.0`
    -   `eslint-plugin-json-schema-validator` - `2.1.48` -> `2.3.19`
    -   `eslint-plugin-jsonc` - `2.1.0` -> `2.2.1`
    -   `eslint-plugin-regexp` - `1.5.1` -> `1.6.0`
    -   `eslint-plugin-storybook` - `0.5.6` -> `0.5.7`
    -   `eslint-plugin-svelte3` - `3.4.0` -> `3.4.1`
    -   `eslint-plugin-unicorn` - `41.0.0` -> `41.0.1`

*   [#108](https://github.com/terminal-nerds/configs/pull/108) [`5a3ac63`](https://github.com/terminal-nerds/configs/commit/5a3ac635a9de02fe5eeeeb7155d8a5c091d09dc2) Thanks [@xeho91](https://github.com/xeho91)! - 🔧 Tweak rules:

    -   `unicorn/prevent-abbreviations` - change to a warning as this is an suggestion, not a bug.
    -   `node/no-unsupported-features/es-syntax` - temporarily disable, due to a bug - https://github.com/mysticatea/eslint-plugin-node/issues/250

## 0.6.0

### Minor Changes

-   [#100](https://github.com/terminal-nerds/configs/pull/100) [`8d8881e`](https://github.com/terminal-nerds/configs/commit/8d8881e1380d2eb438aa2e278473281115035e8b) Thanks [@xeho91](https://github.com/xeho91)! - 🔧 Optimize path(s) patterns to be ignored, based on existing dependencies.

## 0.5.0

### Minor Changes

-   [#99](https://github.com/terminal-nerds/configs/pull/99) [`50a4f68`](https://github.com/terminal-nerds/configs/commit/50a4f686b393c16c867dc80358e3752c6f1b8da8) Thanks [@xeho91](https://github.com/xeho91)! - ✨ Add better support for [next.js] with [config-next]

    [next.js]: https://nextjs.org/
    [config-next]: https://nextjs.org/docs/basic-features/eslint#eslint-config

-   [#92](https://github.com/terminal-nerds/configs/pull/92) [`f5358d8`](https://github.com/terminal-nerds/configs/commit/f5358d8215a35be263971bcb5b2fabaeba082d1b) Thanks [@renovate](https://github.com/apps/renovate)! - ⬆️ Update dependency `eslint` to `v8.11.0`

-   [#99](https://github.com/terminal-nerds/configs/pull/99) [`50a4f68`](https://github.com/terminal-nerds/configs/commit/50a4f686b393c16c867dc80358e3752c6f1b8da8) Thanks [@xeho91](https://github.com/xeho91)! - ✨ Add better support for [react] or [preact] with:

    -   [plugin jsx-a11y]
    -   [plugin react]
    -   [plugin react-hooks]

    [react]: https://reactjs.org/
    [preact]: https://preactjs.com/
    [plugin jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    [plugin react]: https://github.com/yannickcr/eslint-plugin-react
    [plugin react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks

## 0.4.0

### Minor Changes

-   [#77](https://github.com/terminal-nerds/configs/pull/77) [`f31af88`](https://github.com/terminal-nerds/configs/commit/f31af8819759928ba8370dbf2f3ef857a32eca99) Thanks [@renovate](https://github.com/apps/renovate)! - ⬆️ Update `eslint` to `v8.10.0`

-   [#86](https://github.com/terminal-nerds/configs/pull/86) [`6e1b35d`](https://github.com/terminal-nerds/configs/commit/6e1b35dc9d7480b07c42be79527284355f222a0f) Thanks [@xeho91](https://github.com/xeho91)! - 🔧 Disable plugin rule - `yml/no-empty-mapping-value`

-   [#84](https://github.com/terminal-nerds/configs/pull/84) [`ad798f6`](https://github.com/terminal-nerds/configs/commit/ad798f6cf124a584fc2ca78ce063bc61a085aa47) Thanks [@xeho91](https://github.com/xeho91)! - 🏗️ Replace `deepmerge-ts` with shareable helper function - `createMergedConfig()`

-   [#77](https://github.com/terminal-nerds/configs/pull/77) [`f31af88`](https://github.com/terminal-nerds/configs/commit/f31af8819759928ba8370dbf2f3ef857a32eca99) Thanks [@renovate](https://github.com/apps/renovate)! - ⬆️ Update `eslint-plugin-yml` to `v0.14.0`

-   [#77](https://github.com/terminal-nerds/configs/pull/77) [`f31af88`](https://github.com/terminal-nerds/configs/commit/f31af8819759928ba8370dbf2f3ef857a32eca99) Thanks [@renovate](https://github.com/apps/renovate)! - ⬆️ Update `eslint-plugin-sonarjs` to `v0.12.0`

-   [#86](https://github.com/terminal-nerds/configs/pull/86) [`6e1b35d`](https://github.com/terminal-nerds/configs/commit/6e1b35dc9d7480b07c42be79527284355f222a0f) Thanks [@xeho91](https://github.com/xeho91)! - 🔧 Remove loading condition (is ES module) for the `unicorn` plugin

## 0.3.0

### Minor Changes

-   [#50](https://github.com/terminal-nerds/configs/pull/50) [`0885987`](https://github.com/terminal-nerds/configs/commit/0885987a40f522b66e072b9e2604a87dc142e36d) Thanks [@renovate](https://github.com/apps/renovate)! - ⬆️ Update dependency `eslint` to `v8.9.0`

## 0.2.0

### Minor Changes

-   [#38](https://github.com/terminal-nerds/configs/pull/38) [`cfa74ae`](https://github.com/terminal-nerds/configs/commit/cfa74aefe5adb6cde0881a4b252b1f3404901939) Thanks [@xeho91](https://github.com/xeho91)! - ✨ Add support for [Storybook] by adding [eslint-plugin-storybook] config
    🙈 Remove `.github` directory from ignore list

    [storybook]: https://storybook.js.org/
    [eslint-plugin-storybook]: https://github.com/storybookjs/eslint-plugin-storybook

### Patch Changes

-   [#33](https://github.com/terminal-nerds/configs/pull/33) [`0855763`](https://github.com/terminal-nerds/configs/commit/08557638bfea49d310a7cb42cb9e9a842911af08) Thanks [@xeho91](https://github.com/xeho91)! - 📝 Improve package documentation in the `README.md` file

## 0.1.1

### Patch Changes

-   [#19](https://github.com/terminal-nerds/configs/pull/19) [`4015cf2`](https://github.com/terminal-nerds/configs/commit/4015cf23353848c5f37e11561659c8e6d53c2b01) Thanks [@renovate](https://github.com/apps/renovate)! - 📌 Pin ESLint dependencies
-   [#26](https://github.com/terminal-nerds/configs/pull/26) [`0502ac0`](https://github.com/terminal-nerds/configs/commit/0502ac043987b63825a034a968d060160354a585) Thanks [@xeho91](https://github.com/xeho91)! - 📝 Improve `README.md` documentation (badges, versions)

## 0.1.0

### Minor Changes

-   [#14](https://github.com/terminal-nerds/configs/pull/14) [`ed834c7`](https://github.com/terminal-nerds/configs/commit/ed834c7d5345391d669ed767151671153c65967d) Thanks [@xeho91](https://github.com/xeho91)! - 🎉 Initial release
