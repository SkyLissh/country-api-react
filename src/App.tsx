import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemingProvider } from './context/theming.context';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

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
  }
`;

function App(): ReactElement {
	return (
		<ThemingProvider>
			<Router>
				<GlobalStyle />
				<ThemeProvider theme="">
					<Switch>
						<Route path="/" exact></Route>
						<Route path="/details"></Route>
					</Switch>
				</ThemeProvider>
			</Router>
		</ThemingProvider>
	);
}

export default App;
