import React, { ReactElement, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMoon, fas, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';

import { ThemingContext, ThemingProvider } from './context/theming.context';

import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import HomePage from './pages/home.page';

library.add(fab, fas, faMoon, faSun, faSearch);

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    margin-top: 8rem;
    transition: all 0.3s ease;
		background-color: ${lightTheme.colors.background}
  }

	button {
		border: none;
		&:hover {
			cursor: pointer;
		}

		&:focus {
			outline: none;
		}
	}

	input {
		border: none;
		font-family: inherit;

		&:focus {
			outline: none;
		}
	}

	select {
		border: none;

		&:focus {
			outline: none;
		}
	}
`;

function App(): ReactElement {
	const themeContext: string = useContext(ThemingContext);
	const theme: DefaultTheme = themeContext === 'dark-theme' ? darkTheme : lightTheme;

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
