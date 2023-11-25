/** @see {@link https://bun.sh/docs/api/globals} */
// @ts-ignore TODO: Explain
export const IN_BUN = globalThis.Bun !== undefined && Bun.version !== undefined;

/** @see {@link https://deno.land/manual@v1.31.1/runtime#deno-global} */
export const IN_DENO =
	// @ts-ignore TODO: Explain
	globalThis.Deno !== undefined &&
	// @ts-ignore TODO: Explain
	Deno.version !== undefined &&
	// @ts-ignore TODO: Explain
	Deno.version.deno !== undefined;

/** Detects if the DOM is available. */
export const IN_DOM =
	// @ts-ignore TODO: Explain
	globalThis.window !== undefined &&
	// @ts-ignore FIXME: Find a way to make it typed?
	window.document !== undefined;

/** @see {@link https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime} */
// @ts-ignore FIXME: Find a way to make it typed?
export const IN_EDGE = globalThis.EdgeRuntime !== undefined;

/** @see {@link https://github.com/jsdom/jsdom} */
// @ts-ignore TODO: Explain
export const IN_JSDOM = IN_DOM && navigator.userAgent.includes("jsdom");

/** @see {@link https://github.com/capricorn86/happy-dom/discussions/481} */
// @ts-ignore FIXME: Find a way to make it typed?
export const IN_HAPPY_DOM = IN_DOM && window.happyDOM !== undefined;

/** @see {@link https://nodejs.org/dist/latest-v18.x/docs/api/process.html#process} */
export const IN_NODE =
	globalThis.process !== undefined && process.version !== undefined;

/** Detect if is running in browser, and is not in a browser emulator (e.g. jsdom or Happy DOM) */
export const IN_BROWSER = IN_DOM && !IN_HAPPY_DOM && !IN_JSDOM;

/** @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers} */
export const IN_WEB_WORKER =
	// @ts-ignore TODO: Explain
	typeof self === "object" &&
	// @ts-ignore TODO: Explain
	self.constructor &&
	// @ts-ignore TODO: Explain
	self.constructor.name === "DedicatedWorkerGlobalScope";

/**
 * @see {@link https://nodejs.org/api/modules.html#modules-commonjs-modules} CommonJS Module
 */
export const IN_CJS = typeof globalThis.require === "function";

/**
 * @see {@link https://nodejs.org/api/esm.html#modules-ecmascript-modules} ECMAScript Module
 */
export const IN_ESM = !IN_CJS && Boolean(import.meta);
