/**
 * {@link https://github.com/roydukkey/clean-package#options}
 */
const config = {
	extends: ["clean-package/common"],
	indent: 4,
	remove: ["devDependencies", "packageManager", "scripts"],
};

module.exports = config;
