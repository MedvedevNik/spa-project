import React from 'react';
import styled from '@emotion/styled';

const VideoContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

function VideoOverlay({ videoSrc }) {
  return (
    <VideoContainer>
      <video width='100%' controls muted loop preload='metadata'>
        <source src={videoSrc} type='video/mp4' />
      </video>
    </VideoContainer>
  );
}

export default VideoOverlay;