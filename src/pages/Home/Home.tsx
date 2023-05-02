import { Box } from "@mui/system";
import { Album, IAlbumTrack } from "../../common";
import "./Home.scss";
import { WordOfTheDay } from "./WordOfTheDay";
import { albums } from '../../data';
import { useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

export function Home() {
  const [currentTrack, setCurrentTrack] = useState<IAlbumTrack | null>(null);
  return (
    <Box className="page-home">
      <Box className="home__hero -flex -space-between">
        {/*<img alt="Jam Session" src="/img/cartoon-jam.jpeg" />*/}
        <WordOfTheDay />
      </Box>
      <Box className="home__albums -flex -space-between">
        {albums.map((album, index) => (
          <Album key={`album-${album.title}`} album={album} onTrackClick={onTrackClick} />
        ))}
      </Box>
      <Box className="home__player -flex -space-between">
        <ReactAudioPlayer
          src={currentTrack?.src}
          title={currentTrack?.title}
          autoPlay
          controls
        />
      </Box>
    </Box>
  );
  function onTrackClick(track: IAlbumTrack) {
    setCurrentTrack(track);
  }
}