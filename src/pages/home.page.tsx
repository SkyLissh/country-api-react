import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ApiService } from '../services/api.service';

import { Container } from '../components/container.component';
import Filter, { FilterContainer } from '../components/filter.component';
import Search from '../components/search.component';
import Card, { CardContainer } from '../components/card.component';
import { Country } from '../models/country.model';

export default function HomePage(): ReactElement {
	const [countries, setCountries] = useState<Country[]>([]);
	const [countryName, setCountryName] = useState<string>('');

	const history = useHistory();

	const getAllCountries = async (): Promise<void> => {
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

	const goDetailsPage = (country: string): void => {
		history.push(`details/${country.toLowerCase()}`);
	};

	useEffect(() => {
		getAllCountries();
	}, []);

	return (
		<>
			<header>
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
								onClick={() => goDetailsPage(country.name)}
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
