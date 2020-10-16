import 'styled-components';

declare module 'styled-components' {
	export interface ITheme {
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
