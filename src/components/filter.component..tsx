import React, { ReactElement } from 'react';
import styled from 'styled-components';

export const FilterContainer = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const FilterOptions = styled.div`
	position: relative;
	max-width: 14rem;
	margin: 1.5rem 0;

	border-radius: 0.5rem;
	background-color: ${(props) => props.theme.colors.element};
	box-shadow: 8px 8px 20px -15px ${(props) => props.theme.colors.shadow};
	transition: all 0.3s ease;

	&::after {
		position: absolute;
		top: 12px;
		right: 15px;

		content: '\f0d7';
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 2rem;
		color: ${(props) => props.theme.colors.primary};

		pointer-events: none;
	}
`;

const FilterSelected = styled.select`
	padding: 1.3rem;
	margin-right: 1.5rem;
	width: 100%;

	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

	background: none;
	color: ${(props) => props.theme.colors.foreground};

	display: block;
`;

const FilterOption = styled.option`
	color: ${(props) => props.theme.colors.foreground};
	background-color: ${(props) => props.theme.colors.element};
	transition: all 0.3s ease;
`;

export default function Filter(): ReactElement {
	return (
		<FilterOptions>
			<FilterSelected defaultValue="default">
				<FilterOption value="default" disabled>
					Filter By Region
				</FilterOption>
				<FilterOption value="africa"> Africa </FilterOption>
				<FilterOption value="americas"> America </FilterOption>
				<FilterOption value="europe"> Europe </FilterOption>
				<FilterOption value="oceania"> Oceania </FilterOption>
			</FilterSelected>
		</FilterOptions>
	);
}
