import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Container } from '../components/container.component';
import Filter from '../components/filter.component.';
import Navbar from '../components/navbar.component';
import Search from '../components/search.component';
import Card, { CardContainer } from '../components/card.component';

const FilterContainer = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export default function HomePage(): ReactElement {
	return (
		<>
			<header>
				<Navbar />
				<Container>
					<FilterContainer>
						<Search />
						<Filter />
					</FilterContainer>
				</Container>
			</header>
			<main>
				<Container>
					<CardContainer>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</CardContainer>
				</Container>
			</main>
		</>
	);
}
