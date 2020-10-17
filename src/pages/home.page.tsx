import React, { ReactElement } from 'react';

import { Container } from '../components/container.component';
import Filter, { FilterContainer } from '../components/filter.component.';
import Navbar from '../components/navbar.component';
import Search from '../components/search.component';
import Card, { CardContainer } from '../components/card.component';

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
