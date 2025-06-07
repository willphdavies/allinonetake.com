import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Album } from "../../common";
import { useAppState } from "../../data";
import "./Home.scss";
import { WordOfTheDay } from "./WordOfTheDay";

export function Home() {
  const { albums } = useAppState();
  return (
    <Box className="page-home">
      <Box className="home__hero -flex -space-between">
        <WordOfTheDay />
      </Box>
      <Box className="home__albums -flex -space-between">
        {albums.slice(0, 2).map((album) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Album key={`album-${album.title}`} album={album} />
          </Box>
        ))}
        {albums.slice(2).map((album) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Link to={`/session/${album.dateSlug}`}>
              <Album key={`album-${album.title}`} album={album} imageOnly />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
