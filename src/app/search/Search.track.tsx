import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ICombinedTrackList, useAppState } from "../data";

interface SearchTrackProps {
  track: ICombinedTrackList;
}
export function SearchTrack(props: SearchTrackProps) {
  const { track } = props;
  const { isPlaying, onTrackClick, currentTrack } = useAppState();
  const isTheTrackCurrentlySelected = currentTrack?.title === track.title;
  const isTheTrackCurrentlyPlaying = isPlaying && isTheTrackCurrentlySelected;
  return (
    <ListItem>
      <ListItemButton
        selected={isTheTrackCurrentlySelected}
        onClick={() => onTrackClick(track, track.album)}
      >
        <ListItemAvatar>
          <Avatar src={track.album.img} />
        </ListItemAvatar>
        <ListItemText primary={track.title} secondary={track.album.title} />
      </ListItemButton>
    </ListItem>
  );
}
