import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			background: string;
			foreground: string;
			placeholder: string;
			element: string;
			shadow: string;
		};
	}
}
