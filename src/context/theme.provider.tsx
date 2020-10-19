import React, { ReactElement, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemingContext } from './theming.context';

interface Props {
	children: ReactElement[];
}

export default function Theme(props: Props): ReactElement {
	const [theme] = useContext(ThemingContext);

	return <ThemeProvider theme={theme}> {props.children} </ThemeProvider>;
}
