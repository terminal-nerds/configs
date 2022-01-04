export function isContinuousIntegration() {
	const names = new Set(["ci", "continuous integration", "continuous-integration"]);

	return names.has(process.env["NODE_ENV"] || "");
}
