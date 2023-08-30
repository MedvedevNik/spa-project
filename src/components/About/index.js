import React from 'react';
import styled from "@emotion/styled";

import backgroundImage from '../../img/background.jpg';

const AboutWrapper = styled.div`
	position: relative;
	padding: 100px 0;
	text-align: center;
	font-weight: bold;
	color: white;
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background-image: url(${backgroundImage});
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	filter: brightness(0.3);
`;

const Title = styled.h1`
    font-size: 3em;
    margin-bottom: 30px;
	text-align: left;
`;

const Description = styled.div`
	text-align: left;
	p {
		margin: 20px 0;
		font-size: 1.25em;
	}
`;

const About = ({ title, children }) => (
	<AboutWrapper>
		<Background/>
		<div className='container'>
			<Title>{title}</Title>
			<Description>
				{children}
			</Description>
		</div>
	</AboutWrapper>
);

export default About;
