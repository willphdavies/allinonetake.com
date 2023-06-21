import { Card, CardContent, CardHeader, CardMedia, List } from "@mui/material";
import { IAlbum, IAlbumTrack } from "../../data/Album.interface";
import { AlbumTrack } from "./Album.track";
import "./Album.scss";
import dayjs from "dayjs";

export interface AlbumProps {
  album: IAlbum;
  currentTrack: IAlbumTrack | null;
  onTrackClick: (track: IAlbumTrack) => void;
  isPlaying: boolean;
}
export function Album(props: AlbumProps) {
  const { album, onTrackClick, currentTrack, isPlaying } = props;
  return(
    <Card className="album">
      <CardHeader title={album.title} subheader={dayjs(album.date).format('MM/DD/YY')} />
      <CardMedia component="img" height={350} src={album.img} />
      <CardContent>
        <List disablePadding>
          {album.tracks.map((track, index) => (
            <AlbumTrack currentTrack={currentTrack} isPlaying={isPlaying} key={`track-${index}`} track={track} onTrackClick={onTrackClick} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}