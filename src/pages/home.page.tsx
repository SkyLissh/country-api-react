import React, { ReactElement, useEffect, useState } from 'react';

import { ApiService } from '../services/api.service';

import { Container } from '../components/container.component';
import Filter, { FilterContainer } from '../components/filter.component';
import Navbar from '../components/navbar.component';
import Search from '../components/search.component';
import Card, { CardContainer } from '../components/card.component';
import { Country } from '../models/country.model';

export default function HomePage(): ReactElement {
	const [countries, setCountries] = useState<Country[]>([]);
	const [countryName, setCountryName] = useState<string>('');

	const getAllCountries = async () => {
		const res = await ApiService.getAllCountries();
		if (res) setCountries(res);
	};

	const getCountriesByRegion = async (value: string): Promise<void> => {
		const res = await ApiService.getCountriesByRegion(value);
		if (res) setCountries(res);
	};

	const getCountryByName = (value: string): void => {
		setCountryName(value);
	};

	let filteredCountries = countries.filter((country) => {
		return country.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1;
	});

	useEffect(() => {
		getAllCountries();
	}, []);

	return (
		<>
			<header>
				<Navbar />
				<Container>
					<FilterContainer>
						<Search getCountryName={getCountryByName} />
						<Filter getRegion={getCountriesByRegion} />
					</FilterContainer>
				</Container>
			</header>
			<main>
				<Container>
					<CardContainer>
						{filteredCountries.map((country) => (
							<Card
								key={country.name}
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
