import React from 'react';
import styled from "@emotion/styled";

const ImgWrapper = styled.div`
	max-width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 16px;
`;

const Img = styled.img`
	max-width: 100%;
`;

const Description = styled.p`
    margin: 10px 0;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`

const ImgItem = ({ item }) => {
	console.log(item)
	return (
	<ImgWrapper>
		<Img
			className='portfolio-item__screenshot'
			src={item.screenshot}
			alt={item.description}
		/>
		<Description>{item.description}</Description>
	</ImgWrapper>
)};


export default ImgItem;
