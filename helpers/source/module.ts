export function hasModule(name: string): boolean {
	try {
		require.resolve(name);

		return true;
	} catch {
		return false;
	}
}
