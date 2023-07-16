import React from "react";
import "./App.scss";
import { AppRoutes } from "./App.routes";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Box } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import { useAppState } from "./data";
Amplify.configure(awsExports);
interface AppProps {
  signOut?: () => void;
  user?: any;
}
function App(props: AppProps) {
  const appState = useAppState();
  return (
    <Box className="app-conatiner">
      <AppRoutes />
      <Box className="app__player -flex -space-between">
        <ReactAudioPlayer
          src={appState.currentTrack?.src}
          title={appState.currentTrack?.title}
          onEnded={appState.onTrackEnd}
          onPlay={() => appState.setIsPlaying(true)}
          onPause={() => appState.setIsPlaying(false)}
          autoPlay
          controls
        />
      </Box>
    </Box>
  );
}

export default App;
