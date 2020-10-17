import React, { ReactElement, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemingContext, ThemingProvider } from './context/theming.context';

import { ThemeProvider, createGlobalStyle, ITheme } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import HomePage from './pages/home.page';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito Sans' sans-serif;
    margin-top: 8rem;
    transition: all 0.5 ease;
		background-color: ${lightTheme.colors.background}
  }
`;

function App(): ReactElement {
	const themeContext: string = useContext(ThemingContext);
	const theme: ITheme = themeContext === 'dark-theme' ? darkTheme : lightTheme;

	return (
		<ThemingProvider>
			<Router>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
						<Route path="/details"></Route>
					</Switch>
				</ThemeProvider>
			</Router>
		</ThemingProvider>
	);
}

export default App;
