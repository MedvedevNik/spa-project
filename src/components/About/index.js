import React from 'react';
import styled from "@emotion/styled";

import backgroundImage from '../../img/background.jpg';

const AboutWrapper = styled.div`
	position: relative;
	padding-block: 40px;
	text-align: center;
	font-weight: bold;
	color: white;
	@media screen and (min-width: 1024px) {
		padding-block: 100px;
	}
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.9);
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	filter: brightness(1);
	@media screen and (min-width: 1024px) {
		background-image: url(${backgroundImage});
		filter: brightness(0.3);
	}
`;

const Title = styled.h1`
	font-size: 2em;
    margin-bottom: 30px;
	text-align: left;
	@media screen and (min-width: 1280px) {
    	font-size: 3em;
	}
`;

const Description = styled.div`
	text-align: left;
	p {
		margin: 20px 0;
		font-size: 1em;
		@media screen and (min-width: 1280px) {
			font-size: 1.25em;
		}
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
