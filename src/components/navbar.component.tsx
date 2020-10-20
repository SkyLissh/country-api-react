import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from './button.component';
import { ThemingContext } from '../context/theming.context';
import { darkTheme, lightTheme } from '../themes';

const StyledNavbar = styled.nav`
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	padding: 1.5rem 0;

	background-color: ${(props) => props.theme.colors.element};
	box-shadow: 0px -10px 20px ${(props) => props.theme.colors.shadow};
	transition: all 0.3s ease-in;
`;

const NavbarContent = styled.div`
	margin: 0 1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		margin: 0 10%;
	}

	h1 {
		margin: 0;

		font-weight: 800;
		font-size: 1.5rem;
		color: ${(props) => props.theme.colors.foreground};
	}
`;

export default function Navbar(): ReactElement {
	const [theme, setTheme] = useContext(ThemingContext);

	const changeTheme = (): void => {
		if (theme.colors.primary === lightTheme.colors.primary) {
			setTheme(darkTheme);
			localStorage.setItem('theme', JSON.stringify(darkTheme));
		} else {
			setTheme(lightTheme);
			localStorage.setItem('theme', JSON.stringify(lightTheme));
		}
	};

	return (
		<>
			<StyledNavbar>
				<NavbarContent>
					<h1>Where in the world?</h1>
					<Button fab onClick={changeTheme}>
						{theme.colors.primary === lightTheme.colors.primary ? (
							<FontAwesomeIcon icon={['fas', 'moon']} />
						) : (
							<FontAwesomeIcon icon={['fas', 'sun']} />
						)}
					</Button>
				</NavbarContent>
			</StyledNavbar>
		</>
	);
}
