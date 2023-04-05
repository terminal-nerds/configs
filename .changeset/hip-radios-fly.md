---
"@terminal-nerds/eslint-config": minor
---

🔧 Tweak loading conditions of plugins:

    - `jsdoc` -> by default, disabled if `typescript` module exists,
    - `tsdoc` -> by default, enabled if `typescript` module exists.

In both cases,
the environment variable `DOCUMENTATION_TYPE` can be set to `jsdoc` or `tsdoc`,
to decide which one should be loaded.
