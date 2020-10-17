import React, { Context, createContext, ReactElement } from 'react';

interface Props {
	children: ReactElement;
}

export const ThemingContext: Context<string> = createContext('light-theme');

export function ThemingProvider(props: Props): ReactElement {
	return <ThemingContext.Provider value=""> {props.children} </ThemingContext.Provider>;
}
