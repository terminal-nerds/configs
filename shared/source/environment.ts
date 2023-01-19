export const IN_BROWSER = globalThis.window !== undefined;
export const IN_NODE_JS = globalThis.process !== undefined;

export function isContinuousIntegration(): boolean {
	const environmentVariables = Object.keys(process.env);
	const names = new Set(["CI", "CONTINUOUS_INTEGRATION"]);
	const match = environmentVariables.find((variable) => names.has(variable));

	return match ? (process.env[match] as string) === "true" : false;
}
