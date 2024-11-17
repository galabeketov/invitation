// src/App.js

import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import RSVPForm from "./components/RSVPForm";

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <SliderSection />
    <VideoSection />
    <RSVPForm />
    <Footer />
    <MusicPlayer />
  </>
);

export default App;
