import React from 'react';
import styled from "@emotion/styled";

import VideoOverlay from '../../components/video';

import videoSrc from '../../img/for-student.mp4';

const Project = styled.div`
	padding: 40px;
    text-align: center;
`;

const VideoBlock = styled.div`
	padding: 40px 0;
`;

function ProjectPage() {
    return (
        <Project>
			<VideoBlock>
				<div className='container'>
					<VideoOverlay videoSrc={videoSrc} />
				</div>
			</VideoBlock>
        </Project>
    );
}

export default ProjectPage;
