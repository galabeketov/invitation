// src/components/MusicPlayer.js

import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styled from "styled-components";

const MusicWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const MusicPlayer = () => (
  <MusicWrapper>
    <AudioPlayer
      src="/music/background-music.mp3"
      autoPlay
      loop
      volume={0.5}
      showJumpControls={false}
      customAdditionalControls={[]}
    />
  </MusicWrapper>
);

export default MusicPlayer;
