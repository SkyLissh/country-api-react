import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ApiService } from '../services/api.service';

import { Button } from '../components/button.component';
import { Container } from '../components/container.component';
import Details from '../components/details.component';
import { Country } from '../models/country.model';

export default function DetailsPage(): ReactElement {
	const [country, setCountry] = useState<Country>(
		new Country('', '', 0, '', '', '', [], [], [], [], '')
	);

	const { countryName } = useParams<{ countryName: string }>();
	const history = useHistory();

	const getCountryByName = async (name: string): Promise<void> => {
		const res = await ApiService.getCountryByName(name);
		if (res) setCountry(res);
	};

	const goHomePage = (): void => {
		history.goBack();
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		getCountryByName(countryName);
	}, [countryName]);

	return (
		<>
			<header>
				<Container>
					<Button onClick={goHomePage}>
						<FontAwesomeIcon icon={['fas', 'arrow-left']} />
						Back
					</Button>
				</Container>
			</header>
			<main>
				<Container>
					<Details
						flag={country.flag}
						name={country.name}
						nativeName={country?.nativeName}
						population={country.population}
						region={country.region}
						subRegion={country?.subRegion}
						capital={country.capital}
						topLevelDomain={country?.topLevelDomain}
						currencies={country?.currencies}
						languages={country?.languages}
						borders={country?.borders}
					/>
				</Container>
			</main>
		</>
	);
}
