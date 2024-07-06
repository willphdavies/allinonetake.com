"use client";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  TextField,
} from "@mui/material";
import { sortBy } from "lodash";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { getDateSlug, useAppState } from "../data";
import "./Search.scss";
import { SearchTrack } from "./Search.track";

export function Search() {
  const { allTracks, albums } = useAppState();
  const qs = useSearchParams();
  const pathname = usePathname();
  const search = qs.get("search") ?? "";
  const filteredByTrackName = sortBy(
    allTracks.filter((track) => {
      return track.title.toLowerCase().search(search.toLowerCase()) >= 0;
    }),
    "title"
  );
  const filteredByAlbumName = sortBy(
    albums.filter((album) => {
      return album.title.toLowerCase().search(search.toLowerCase()) >= 0;
    }),
    "title"
  );
  return (
    <Box className="search">
      <Card className="search__card">
        <CardHeader>Search</CardHeader>
        <CardContent>
          <List>
            <ListItem>
              <TextField
                id="search"
                label="Search"
                value={search}
                onChange={(ev) => updateSearch(ev.target.value)}
                fullWidth
              />
            </ListItem>
            <ListSubheader>{`Tracks - ${filteredByTrackName.length} of ${allTracks.length}`}</ListSubheader>
            {filteredByTrackName.length > 0 ? (
              filteredByTrackName.map((track, index) => (
                <SearchTrack key={`track-${index}`} track={track} />
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No Albums Found" />
              </ListItem>
            )}
            <ListSubheader>{`Albums - ${filteredByAlbumName.length} of ${albums.length}`}</ListSubheader>
            {filteredByAlbumName.length > 0 ? (
              filteredByAlbumName.map((album, index) => (
                <ListItem key={`album-${index}`}>
                  <ListItemButton
                    component={Link}
                    href={`/session/${getDateSlug(album)}`}
                  >
                    <ListItemAvatar>
                      <Avatar src={album.img} />
                    </ListItemAvatar>
                    <ListItemText primary={album.title} />
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No Albums Found" />
              </ListItem>
            )}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
  function updateSearch(text: string) {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(qs.entries()));
    current.set("search", text);
    const search = current.toString();
    const query = search ? `${search}` : "";
    window.history.pushState({}, "", `${pathname}?${query}`);
  }
}
