export function hasModule(name: string): boolean {
	try {
		// eslint-disable-next-line unicorn/prefer-module
		require.resolve(name);

		return true;
	} catch {
		return false;
	}
}
