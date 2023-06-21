import { Box } from "@mui/system";
import { Album, IAlbum, IAlbumTrack } from "../../common";
import "./Home.scss";
import { WordOfTheDay } from "./WordOfTheDay";
import { albums } from '../../data';
import { useState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Typography } from "@mui/material";

export function Home() {
  const [currentTrack, setCurrentTrack] = useState<IAlbumTrack | null>(null);
  const [currentAlbum, setCurrentAlbum] = useState<IAlbum | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <Box className="page-home">
      <Box className="home__hero -flex -space-between">
        {/*<img alt="Jam Session" src="/img/cartoon-jam.jpeg" />*/}
        <WordOfTheDay />
      </Box>
      <Box className="home__albums -flex -space-between">
        {albums.map((album, index) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Album
              key={`album-${album.title}`}
              isPlaying={isPlaying}
              currentTrack={currentTrack}
              album={album}
              onTrackClick={(track) => onTrackClick(track, album)} />
          </Box>
        ))}
      </Box>
      <Box className="home__player -flex -space-between">
        <ReactAudioPlayer
          src={currentTrack?.src}
          title={currentTrack?.title}
          onEnded={onTrackEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          autoPlay
          controls
        />
      </Box>
    </Box>
  );
  function onTrackClick(track: IAlbumTrack, album: IAlbum) {
    if (track.title !== currentTrack?.title) {
      setCurrentAlbum(album);
      setCurrentTrack(track);
    }
  }
  function onTrackEnd() {
    let endingTrackIndex = -1;
    if (currentAlbum) {
      currentAlbum.tracks.map((track, index) => {
        if(track.title === currentTrack?.title) {
          endingTrackIndex = index;
        }
      });
      if (endingTrackIndex > 0 && currentAlbum.tracks[endingTrackIndex + 1]) {
        return onTrackClick(currentAlbum.tracks[endingTrackIndex + 1], currentAlbum);
      }
      setCurrentAlbum(null);
      setCurrentTrack(null);
    }
  }
}