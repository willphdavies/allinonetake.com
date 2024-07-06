import { Album, WordOfTheDay } from "@/app/components";
import { albums, getDateSlug } from "@/app/data";
import { Box } from "@mui/system";
import Link from "next/link";
import "./Home.scss";

export function Home() {
  return (
    <Box className="page-home">
      <Box className="home__hero -flex -space-between">
        {/*<img alt="Jam Session" src="/img/cartoon-jam.jpeg" />*/}
        <WordOfTheDay />
      </Box>
      <Box className="home__albums -flex -space-between">
        {albums.slice(0, 3).map((album) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Album key={`album-${album.title}`} album={album} />
          </Box>
        ))}
        {albums.slice(3).map((album) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Link href={`/session/${getDateSlug(album)}`}>
              <Album key={`album-${album.title}`} album={album} imageOnly />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
