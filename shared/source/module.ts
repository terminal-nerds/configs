import { resolveModule } from "local-pkg";

import { IN_NODE_JS } from "./environment.js";

export const IN_COMMON_JS = IN_NODE_JS && typeof globalThis.require === "function";
export const IN_ES_MODULE = !IN_COMMON_JS && Boolean(import.meta);

export function hasModule(name: string): boolean {
	return Boolean(resolveModule(name));
}
