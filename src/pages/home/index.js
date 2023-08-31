import React from 'react';
import styled from "@emotion/styled";

import About from '../../components/About';
import ImgItem from '../../components/ImgItem';
import VideoOverlay from '../../components/video';

import photos from '../../photo';
import videoSrc from '../../img/css-trick.mp4';

const Images = styled.div`
	align-items: center;
	justify-content: center;
`;

const ImgBlock = styled.div`
	padding: 40px 0;
	.container {
		display: flex;
		flex-wrap: wrap;
	}
`;

const LinkBlock = styled.div`
	max-width: 1000px;
	text-align: center;
`;

const LinkWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Link = styled.a`
	display: flex;
	max-width: 320px;
	align-items: center;
	justify-content: center;
	padding: 0 18px;
	border-radius: 4px;
	height: 48px;
	background: teal;
	color: white;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	text-decoration: none;
	transition: opacity 0.5s;
	opacity: 1;  
	&:hover {
		opacity: 0.9;
	}
	&:active {
		opacity: 0.75;
	}
`;

const VideoBlock = styled.div`
	padding: 40px 0;
`;

const HomePage = () => (
	<>
		<About title='Frontend-разработчик Медведев Николай'>
			<p>
				Во время учебы в колледже, я решил заняться веб-дизайном. После обучения и года работы в этой сфере, я понял, что мне интереснее писать код и создавать сайты, а не их дизайны.
			</p>
			<p>
				После очередного обучения, я понял, что верстка может быть интересной и начала завиваться в этом направлении. Спустя полгода устроился в компанию на должность Frontend-разработчика и начал писать на React. Сейчас же я работаю в компании, которая разрабатывает конструктор сайтов и понимаю, что разработка это та сфера, в который я буду развиваться дальше для создания удобных и доступных приложений.
			</p>
		</About>
		<ImgBlock>
			<Images className='container'>
				{photos.map((item, idx) => (
					<ImgItem key={idx} item={item} />
				))}
			</Images>
		</ImgBlock>
		<LinkBlock className='container'>
			<LinkWrapper>
				<Link className='button' href="https://github.com/MedvedevNik/spa-project" target="_blank">
					Данный проект
				</Link>
			</LinkWrapper>
		</LinkBlock>
		<VideoBlock>
			<div className='container'>
      			<VideoOverlay videoSrc={videoSrc} />
			</div>
		</VideoBlock>
	</>
);

export default HomePage;
