import { Album } from "@/app/components";
import { findAlbums } from "@/app/data";
import { Box } from "@mui/material";
import "./Session.scss";
type SessionProps = {
  year: string;
  month: string;
  day: string;
};
export function Session(props: SessionProps) {
  const { year, month, day } = props;
  if (!year || !month || !day) {
    throw new Error("no session id");
  }
  const albums = findAlbums(year, month, day);
  return (
    <Box className="session">
      <Box className="session__albums -flex -space-between">
        {albums.map((album) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Album key={`album-${album.title}`} album={album} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
