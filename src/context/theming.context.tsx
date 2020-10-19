import React, { createContext, ReactElement, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { lightTheme } from '../themes';

interface Props {
	children: ReactElement;
}

export const ThemingContext = createContext<
	[DefaultTheme, React.Dispatch<React.SetStateAction<DefaultTheme>>]
>([lightTheme, () => null]);

export function ThemingProvider(props: Props): ReactElement {
	const darkMode = useState<DefaultTheme>(lightTheme);

	return (
		<ThemingContext.Provider value={darkMode}> {props.children} </ThemingContext.Provider>
	);
}
