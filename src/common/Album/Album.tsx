import { Card, CardContent, CardHeader, CardMedia, List } from "@mui/material";
import { IAlbum } from "../../data/Album.interface";
import { AlbumTrack } from "./Album.track";
import "./Album.scss";
import dayjs from "dayjs";

export interface AlbumProps {
  album: IAlbum;
  onTrackClick: (src: string) => void;
}
export function Album(props: AlbumProps) {
  const { album, onTrackClick } = props;
  return(
    <Card className="album">
      <CardHeader title={album.title} subheader={dayjs(album.date).format('MM/DD/YY')} />
      <CardMedia component="img" height={300} src={album.img} />
      <CardContent>
        <List>
          {album.tracks.map((track, index) => (
            <AlbumTrack key={`track-${index}`} track={track} onTrackClick={onTrackClick} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}