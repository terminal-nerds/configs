import { TYPESCRIPT_EXTENSIONS } from "@terminal-nerds/utils-config/extensions";
import { getNearestConfigPath } from "@terminal-nerds/utils-config/paths";

// TODO: Add support for `jsconfig.json`;

const TYPESCRIPT_CONFIG_FILENAMES = "tsconfig.json";

export const TYPESCRIPT = {
	[`*.{${TYPESCRIPT_EXTENSIONS.join(",")}}`]: (
		allFilePaths: Array<string>,
	) => {
		const commands: Set<string> = new Set();

		for (const filePath of allFilePaths) {
			try {
				const tsconfigPath = getNearestConfigPath(
					TYPESCRIPT_CONFIG_FILENAMES,
					filePath as `/${string}`,
				);

				commands.add(`tsc --noEmit --project ${tsconfigPath}`);
			} catch {
				continue;
			}
		}

		return [...commands];
	},
} as const;
