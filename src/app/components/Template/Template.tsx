"use client";
import MenuIcon from "@mui/icons-material/Menu";
import RandomIcon from "@mui/icons-material/Shuffle";
import {
  AppBar,
  Box,
  Chip,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useAppState } from "../../data";
import "./Default.scss";
import { DefaultSideMenu } from "./Template.side-menu";
interface DefaultTemplateProps {
  children: ReactNode;
}

export function Template(props: DefaultTemplateProps) {
  const { children } = props;
  const { setIsRandom, playRandom, isRandom } = useAppState();
  const [drawOpen, setDrawOpen] = useState(false);
  const { currentTrack, currentAlbum, setIsPlaying, isPlaying, onTrackEnd } =
    useAppState();
  const ref = useRef<ReactAudioPlayer>(null);
  return (
    <Box className="default-template">
      <Box className="default-template__background"></Box>
      <AppBar
        className="default-template__header"
        position="fixed"
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <Link className="home-link" href="/">
            <Box className="default-template__logo">
              <img src="/logo.jpg" alt="All In One Take" />
            </Box>
            <Box>
              <Typography
                className="default-template__title cursive -white"
                variant="h4"
              >
                All In One Take
              </Typography>
              <Typography className="default-template__subtitle -white">
                leave your comfort zone at the door
              </Typography>
            </Box>
          </Link>
          <Box className="-spacer"></Box>
          <IconButton onClick={() => clickRandom()}>
            <RandomIcon
              className={`header__menu-icon ${isRandom ? "-random" : ""}`}
            />
          </IconButton>
          <IconButton
            onClick={() => setDrawOpen(!drawOpen)}
            title="Play Random"
          >
            <MenuIcon className="header__menu-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DefaultSideMenu isOpen={drawOpen} setIsOpen={setDrawOpen} />
      <Box className="default-template__content">{children}</Box>
      <Box className="app__player">
        <ReactAudioPlayer
          ref={ref}
          src={currentTrack?.src}
          title={currentTrack?.title}
          onEnded={onTrackEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          autoPlay
          controls
        />
        {currentTrack && currentAlbum && (
          <Chip
            className="player__now_playing"
            color="secondary"
            label={`${isPlaying ? "Now" : "Resume"} Playing: ${
              currentTrack.title
            } (${currentAlbum?.title})`}
          />
        )}
      </Box>
    </Box>
  );
  function clickRandom() {
    setIsRandom(true);
    playRandom();
  }
}
