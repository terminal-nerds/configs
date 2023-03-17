/** @see {@link https://www.charset.org/utf-8} UTF-8 */
export const CHARSET = "utf8";

/** The most common `80` is too short for the modern times. We allow longer, but not too long. */
export const MAX_LINE_LENGTH = 120;

/** @see {@link https://adamtuttle.codes/blog/2021/tabs-vs-spaces-its-an-accessibility-issue} On why we choose tabs */
export const INDENT = "tabs";

/**
 * Helps to see the scope clearer. Generally you should aim to not write a code where indent exceeds 4 levels. It is
 * difficult to read.
 */
export const TABS_WIDTH = 4;

/** @see {@link https://www.aleksandrhovhannisyan.com/blog/crlf-vs-lf-normalizing-line-endings-in-git} */
export const END_OF_LINE = "lf";

/** Append a new, empty line at the end of file. */
export const FINAL_NEW_LINE = true;
