import { resolveModule } from "local-pkg";

import { IN_BROWSER } from "./scope.ts";

export function hasModule(name: string): boolean {
	/* if (IN_BROWSER) throw new RuntimeError(`You cannot check for module existence in the browser.`); */
	if (IN_BROWSER)
		throw new Error(
			`You cannot check for module existence in the browser.`,
		);

	return Boolean(resolveModule(name));
}
