import { Box } from "@mui/system";
import { Album } from "../../common";
import "./Home.scss";
import { WordOfTheDay } from "./WordOfTheDay";
import { albums } from '../../data';
import { useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

export function Home() {
  const [currentSrc, setCurrentSrc] = useState('');
  return (
    <Box className="page-home">
      <Box className="home__cards -flex -space-between">
        <WordOfTheDay />
      </Box>
      <Box className="-flex -space-between">
        <Album album={albums[0]} onTrackClick={onTrackClick} />
      </Box>
      {currentSrc && (
        <ReactAudioPlayer
          src={currentSrc}
          autoPlay
          controls
        />
      )}
    </Box>
  );
  function onTrackClick(src: string) {
    console.log(src);
    setCurrentSrc(src);
  }
}