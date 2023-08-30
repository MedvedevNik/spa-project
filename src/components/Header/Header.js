import React from 'react';
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
	height: 60px;
	background-color: darkcyan;
	color: white;
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
	font-size: 18px;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
`;

const Header = () => (
	<HeaderWrapper>
		<div className='container'>
			<Link to='/'>
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
