import React, { ReactElement } from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;

	@media (min-width: 768px) {
		display: grid;
		gap: 4rem 2rem;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
	}

	@media (min-width: 1445px) {
		gap: 4rem;
	}
`;

const CardStyled = styled.div`
	margin: 2rem 1.5rem;
	min-height: 26rem;

	background-color: ${(props) => props.theme.colors.element};
	border-radius: 0.5rem;
	box-shadow: 8px 8px 20px -10px ${(props) => props.theme.colors.shadow};
	color: ${(props) => props.theme.colors.foreground};
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	@media (min-width: 768px) {
		margin: 0;
	}

	& h2 {
		margin-top: 0;
	}
`;

const CardImage = styled.div`
	height: 13rem;
	max-height: 13rem;

	img {
		border-radius: 0.5rem 0.5rem 0 0;
		width: 100%;
		height: 100%;
		min-width: 100%;
		min-height: 100%;

		object-fit: cover;
	}
`;

const CardBody = styled.div`
	padding: 1rem 2rem;

	span {
		font-weight: 600;
	}
`;

export default function Card(): ReactElement {
	return (
		<CardStyled>
			<CardImage>
				<img src="https://restcountries.eu/data/mex.svg" alt="flag" />
			</CardImage>

			<CardBody>
				<h2>Mexico</h2>
				<div>
					<p>
						<span>Population: </span>122,273,473
					</p>
					<p>
						<span>Region: </span>Americas
					</p>
					<p>
						<span>Capital: </span>Mexico City
					</p>
				</div>
			</CardBody>
		</CardStyled>
	);
}
