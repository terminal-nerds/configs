import { TYPESCRIPT_EXTENSIONS } from "@workspace/shared/extension";
import { getNearestTypeScriptConfigPath } from "@workspace/shared/project";

export const TYPESCRIPT = {
	[`*.{${TYPESCRIPT_EXTENSIONS.join(",")}}`]: (allFilePaths: Array<string>) => {
		const commands: Set<string> = new Set();

		for (const filePath of allFilePaths) {
			try {
				const tsconfigPath = getNearestTypeScriptConfigPath(filePath);

				commands.add(`tsc --noEmit --project ${tsconfigPath}`);
			} catch {
				continue;
			}
		}

		return [...commands];
	},
} as const;
