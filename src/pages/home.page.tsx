import React, { ReactElement, useEffect, useState } from 'react';

import { ApiService } from '../services/api.service';

import { Container } from '../components/container.component';
import Filter, { FilterContainer } from '../components/filter.component.';
import Navbar from '../components/navbar.component';
import Search from '../components/search.component';
import Card, { CardContainer } from '../components/card.component';
import { Country } from '../models/country.model';

export default function HomePage(): ReactElement {
	const [countries, setCountries] = useState<Country[]>([]);

	const getAllCountries = async () => {
		const res = await ApiService.getAllCountries();
		if (res) setCountries(res);
	};

	useEffect(() => {
		getAllCountries();
	}, [countries]);

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
						{countries.map((country) => (
							<Card
								img={country.flag}
								country={country.name}
								population={country.population}
								region={country.region}
								capital={country.capital}
							/>
						))}
					</CardContainer>
				</Container>
			</main>
		</>
	);
}
