import React, { createContext, ReactElement, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { lightTheme } from '../themes';

interface Props {
	children: ReactElement;
}

function getTheme(): DefaultTheme {
	const theme = localStorage.getItem('theme');

	if (theme) {
		return JSON.parse(theme) as DefaultTheme;
	}

	return lightTheme;
}

export const ThemingContext = createContext<
	[DefaultTheme, React.Dispatch<React.SetStateAction<DefaultTheme>>]
>([getTheme(), () => null]);

export function ThemingProvider(props: Props): ReactElement {
	const darkMode = useState<DefaultTheme>(getTheme());

	return (
		<ThemingContext.Provider value={darkMode}> {props.children} </ThemingContext.Provider>
	);
}
