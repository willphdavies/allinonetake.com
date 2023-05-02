import { PlayArrow } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { IAlbumTrack } from "../../data/Album.interface";

export interface AlbumSongProps {
  track: IAlbumTrack;
  onTrackClick: (src: string) => void;
}
export function AlbumTrack(props: AlbumSongProps) {
  const { track, onTrackClick } = props;
  return (
    <ListItem>
      <ListItemButton onClick={() => onTrackClick(track.src)}>
        <ListItemIcon><PlayArrow /></ListItemIcon>
        <ListItemText primary={track.title} />
      </ListItemButton>
    </ListItem>
  )
}