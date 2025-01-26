declare module 'tailwindcss/lib/util/flattenColorPalette' {
	const flattenColorPalette: (colors: object) => Record<string, string>;
	export default flattenColorPalette;
}

declare module 'tailwindcss' {
	export interface Config {
		content: string[];
		darkMode?: string[];
		theme?: Record<string, unknown>;
		plugins?: unknown[];
	}

	export interface PluginAPI {
		matchUtilities: (
			utilities: Record<string, (value: string) => Record<string, string>>,
			options: { values: Record<string, string>; type: string }
		) => void;
		theme: (path: string) => Record<string, string>;
	}
}
