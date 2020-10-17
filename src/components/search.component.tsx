import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Button } from './button.component';

const SearchContainer = styled.div`
	margin: 1.5rem auto;

	background-color: ${(props) => props.theme.colors.element};
	border-radius: 0.5rem;
	box-shadow: 8px 8px 20px -15px ${(props) => props.theme.colors.shadow};
	transition: all 0.3s ease;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		width: 50%;
		margin: 1.5rem 0;
	}

	button {
		margin: 0 0.5rem;
	}
`;

const SearchInput = styled.input`
	padding: 1.3rem 1.5rem;

	border-radius: 0.5rem;
	background-color: ${(props) => props.theme.colors.element};
	color: ${(props) => props.theme.colors.foreground};
	transition: all 0.3s ease;

	flex: 1;

	&::placeholder {
		color: ${(props) => props.theme.colors.placeholder};
	}
`;

export default function Search(): ReactElement {
	return (
		<SearchContainer>
			<SearchInput type="search" placeholder="Search for a country..." />
			<Button fab>
				<FontAwesomeIcon icon={['fas', 'search']} />
			</Button>
		</SearchContainer>
	);
}
