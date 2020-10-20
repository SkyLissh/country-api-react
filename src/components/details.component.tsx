import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Currencies, Languages } from '../models/country.model';
import { Button } from './button.component';

const DetailContainer = styled.div`
	margin: 3rem 0;

	@media (min-width: 1025px) {
		display: grid;
		grid-template-columns: 3fr 3fr;
		gap: 6rem;
	}
`;

const DetailImage = styled.div`
	height: 15rem;
	max-height: 15rem;

	@media (min-width: 768px) {
		height: 30rem;
		max-height: 30rem;
	}

	img {
		border-radius: 0.5rem;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const DetailBody = styled.div`
	color: ${(props) => props.theme.colors.foreground};
	transition: all 0.3s ease-in;
`;

const DetailTitle = styled.h2`
	@media (min-width: 768px) {
		font-size: 2.2rem;
	}
`;

const DetailContent = styled.div`
	@media (min-width: 768px) {
		height: 14rem;
		max-height: 14rem;
		font-size: 1.1rem;

		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	span {
		font-weight: 600;
	}
`;

const DetailFooter = styled.div`
	margin: 2.5rem 0;
`;

const DetailBorders = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;

	@media (min-width: 768px) {
		gap: 2rem;
	}

	button {
		padding: 1rem;
		font-size: 1.2rem;

		&:hover {
			cursor: initial;
		}
	}
`;

interface Props {
	flag: string;
	name: string;
	nativeName?: string;
	population: number;
	region: string;
	subRegion?: string;
	capital: string;
	topLevelDomain?: string[];
	currencies?: Currencies[];
	languages?: Languages[];
	borders?: string[];
}

export default function Details(props: Props): ReactElement {
	return (
		<DetailContainer>
			<DetailImage>
				<img src={props.flag} alt="flag" />
			</DetailImage>
			<DetailBody>
				<DetailTitle> {props.name} </DetailTitle>
				<DetailContent>
					<p>
						<span>Native Name: </span>
						{props.nativeName}
					</p>
					<p>
						<span>Population: </span>
						{props.population}
					</p>
					<p>
						<span>Region: </span>
						{props.region}
					</p>
					<p>
						<span>Sub Region: </span>
						{props.subRegion}
					</p>
					<p>
						<span>Capital: </span>
						{props.capital}
					</p>
					<p>
						<span>Top Level Domain: </span>
						{props.topLevelDomain?.[0]}
					</p>
					<p>
						<span>Currencies: </span>
						{props.currencies?.[0]?.name}
					</p>
					<p>
						<span>Languages: </span>
						{props.languages?.map((language) => language.name)}
					</p>
				</DetailContent>
				<DetailFooter>
					<h2>Border Countries:</h2>
					<DetailBorders>
						{props.borders?.map((border) => (
							<Button key={border}> {border} </Button>
						))}
					</DetailBorders>
				</DetailFooter>
			</DetailBody>
		</DetailContainer>
	);
}
