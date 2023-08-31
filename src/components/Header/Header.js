import React from 'react';
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
	height: 40px;
	background-color: darkcyan;
	color: white;
	@media screen and (min-width: 1280px) {
		height: 60px;
	}
	.container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	a {
		text-decoration: none;
    	color: inherit;
	}
`;

const Text = styled.span`
	font-size: 16px;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
	@media screen and (min-width: 1280px) {
		font-size: 18px;
	}
`;

const Header = () => (
	<HeaderWrapper>
		<div className='container'>
			<Link to='/home'>
				<Text>
					Главная
				</Text>
			</Link>
			<Link to='/project'>
				<Text>
					Проект
				</Text>
			</Link>
		</div>
	</HeaderWrapper>
);

export default Header;
