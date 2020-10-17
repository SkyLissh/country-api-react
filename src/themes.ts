import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
	colors: {
		primary: '#ffa000',
		background: 'hsl(0, 0%, 95%)',
		foreground: 'hsl(200, 15%, 8%)',
		placeholder: 'hsl(0, 0%, 52%)',
		element: 'hsl(0, 0%, 100%)',
		shadow: 'hsl(43, 12%, 11%)'
	}
};

export const darkTheme: DefaultTheme = {
	colors: {
		primary: '#ffc400',
		background: 'hsl(207, 26%, 17%)',
		foreground: 'hsl(0, 0%, 95%)',
		placeholder: 'hsl(208, 16%, 70%)',
		element: 'hsl(209, 23%, 22%)',
		shadow: 'hsl(0, 0%, 0%)'
	}
};
