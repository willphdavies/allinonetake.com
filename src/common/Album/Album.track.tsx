import { Pause, PlayArrow } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { IAlbumTrack } from "../../data/Album.interface";

export interface AlbumSongProps {
  track: IAlbumTrack;
  currentTrack: IAlbumTrack | null;
  isPlaying: boolean;
  onTrackClick: (track: IAlbumTrack) => void;
}
export function AlbumTrack(props: AlbumSongProps) {
  const { track, onTrackClick, isPlaying, currentTrack } = props;
  const isTheTrackCurrentlySelected = currentTrack?.title === track.title;
  const isTheTrackCurrentlyPlaying = isPlaying && isTheTrackCurrentlySelected;
  return (
    <ListItem>
      <ListItemButton selected={isTheTrackCurrentlySelected} onClick={() => onTrackClick(track)}>
        <ListItemIcon>{ isTheTrackCurrentlyPlaying ? <Pause /> : <PlayArrow />}</ListItemIcon>
        <ListItemText primary={track.title} />
      </ListItemButton>
    </ListItem>
  )
}