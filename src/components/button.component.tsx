import styled, { css } from 'styled-components';

interface ButtonProps {
	fab?: boolean;
}

export const Button = styled.button<ButtonProps>`
	position: relative;

	padding: 1rem 2rem;

	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.element};
	box-shadow: 8px 8px 20px -12px ${(props) => props.theme.colors.shadow};
	border-radius: 0.5rem;
	transition: all 0.3s ease;

	font-size: 1.3rem;
	font-weight: 600;

	svg {
		margin-right: 1rem;
	}

	${(props) =>
		props.fab &&
		css`
			padding: 0;
			height: 3rem;
			width: 3rem;

			border-radius: 100%;
			font-size: 1.5rem;

			display: inline-flex;
			justify-content: center;
			align-items: center;

			svg {
				margin: 0;
			}
		`}
`;
