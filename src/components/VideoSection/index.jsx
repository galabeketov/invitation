// src/components/VideoSection.js

import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoWrapper = styled.div`
  margin: 50px auto;
  width: 80%;
`;

const VideoSection = () => (
  <VideoWrapper>
    <ReactPlayer
      url="/videos/event-video.mp4"
      controls
      width="100%"
      height="auto"
    />
  </VideoWrapper>
);

export default VideoSection;
