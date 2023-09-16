import { getNearestConfigPath } from "@terminal-nerds/snippets-config/read";
import { TYPESCRIPT_EXTENSIONS } from "@terminal-nerds/snippets-extension/schema";

export const TYPESCRIPT = {
	[`*.{${TYPESCRIPT_EXTENSIONS.join(",")}}`]: (
		allFilePaths: Array<string>,
	) => {
		const commands: Set<string> = new Set();

		for (const filePath of allFilePaths) {
			try {
				const tsconfigPath = getNearestConfigPath(
					"tsconfig.json",
					filePath as "/${string}",
				);

				commands.add(`tsc --noEmit --project ${tsconfigPath}`);
			} catch {
				continue;
			}
		}

		return [...commands];
	},
} as const;
