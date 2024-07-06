"use client";
import { useAppState } from "@/app/data";
import { IAlbum, IAlbumTrack } from "@/app/data/Album.interface";
import { Download, Pause, PlayArrow } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export interface AlbumSongProps {
  track: IAlbumTrack;
  album: IAlbum;
}
export function AlbumTrack(props: AlbumSongProps) {
  const { track, album } = props;
  const { isPlaying, onTrackClick, currentTrack } = useAppState();
  const isTheTrackCurrentlySelected = currentTrack?.title === track.title;
  const isTheTrackCurrentlyPlaying = isPlaying && isTheTrackCurrentlySelected;
  return (
    <ListItem>
      <ListItemButton
        selected={isTheTrackCurrentlySelected}
        onClick={() => onTrackClick(track, album)}
      >
        <ListItemIcon>
          {isTheTrackCurrentlyPlaying ? <Pause /> : <PlayArrow />}
        </ListItemIcon>
        <ListItemText primary={track.title} />
        <ListItemIcon>
          <a href={track.src} download onClick={download}>
            <Download />
          </a>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
  function download(ev: React.MouseEvent) {
    ev.stopPropagation();
  }
}
