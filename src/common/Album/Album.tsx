import { Card, CardContent, CardHeader, CardMedia, List } from "@mui/material";
import { IAlbum } from "../../data/Album.interface";
import { AlbumTrack } from "./Album.track";
import "./Album.scss";
import dayjs from "dayjs";
import { useAppState } from "../../data";

export interface AlbumProps {
  album: IAlbum;
  imageOnly?: boolean;
}
export function Album(props: AlbumProps) {
  const { album, imageOnly } = props;
  const { isPlaying, currentTrack, onTrackClick } = useAppState();
  return (
    <Card className="album">
      <CardHeader
        title={album.title}
        subheader={dayjs(album.date).format("MM/DD/YY")}
      />
      <CardMedia component="img" height={350} src={album.img} />
      {!imageOnly && (
        <CardContent>
          <List disablePadding>
            {album.tracks.map((track, index) => (
              <AlbumTrack
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                key={`track-${index}`}
                track={track}
                onTrackClick={(track) => onTrackClick(track, album)}
              />
            ))}
          </List>
        </CardContent>
      )}
    </Card>
  );
}
