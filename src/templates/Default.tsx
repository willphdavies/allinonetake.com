import MenuIcon from "@mui/icons-material/Menu";
import RandomIcon from "@mui/icons-material/Shuffle";
import {
  AppBar,
  Box,
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import ReactGA from "react-ga";
import { Link, useLocation } from "react-router-dom";
import { Video } from "../common/Video";
import { useAppState } from "../data";
import "./CedarvilleCursive-Regular.ttf";
import "./Default.scss";
import { DefaultSideMenu } from "./Default.side-menu";
interface DefaultTemplateProps {
  children: ReactNode;
}

export function DefaultTemplate(props: DefaultTemplateProps) {
  const { children } = props;
  const { setIsRandom, playRandom, isRandom, videos, isPlaying } =
    useAppState();
  const [drawOpen, setDrawOpen] = useState(false);
  const { pathname } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    ReactGA.pageview(pathname);
  }, [pathname]);
  useEffect(() => {
    if (isPlaying) {
      setModalOpen(true);
    }
  }, [isPlaying]);
  return (
    <>
      <Box className="default-template">
        <Box className="default-template__background"></Box>
        <AppBar
          className="default-template__header"
          position="fixed"
          color="transparent"
          elevation={0}
        >
          <Toolbar>
            <Link className="home-link" to="/">
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
        {videos.map((v) => (
          <video
            className="hidden-videos"
            key={v}
            preload="auto"
            autoPlay
            src={v}
          />
        ))}
      </Box>
      <Modal
        className="video-modal"
        open={false}
        onClose={() => setModalOpen(false)}
      >
        <div>
          <Video items={videos} />
        </div>
      </Modal>
    </>
  );
  function clickRandom() {
    setIsRandom(true);
    playRandom();
  }
}
