import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, TextField } from "@mui/material";
import { useAppState } from "../../data";
import { Link, useSearchParams } from "react-router-dom";
import "./Search.scss";
import { sortBy } from "lodash";
import { SearchTrack } from "./Search.track";

export function Search() {
    const { allTracks, albums } = useAppState();
    const [qs, setQs] = useSearchParams();
    const search = qs.get('search') ?? "";
    const filteredByTrackName =  sortBy(allTracks.filter((track) => {
        return track.title.toLowerCase().search(search.toLowerCase()) >= 0;
    }), "title");
    const filteredByAlbumName = sortBy(albums.filter((album) => {
        return album.title.toLowerCase().search(search.toLowerCase()) >= 0;
    }), "title");
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
                            onChange={(ev) => {
                            qs.set("search", ev.target.value)
                            setQs(qs);
                            }}
                            fullWidth
                        />
                        </ListItem>
                        <ListSubheader>{`Tracks - ${filteredByTrackName.length} of ${allTracks.length}`}</ListSubheader>
                        {filteredByTrackName.length > 0 ? filteredByTrackName.map((track, index) => (
                            <SearchTrack key={`track-${index}`} track={track} />
                        )) : <ListItem><ListItemText primary="No Albums Found" /></ListItem>}
                        <ListSubheader>{`Albums - ${filteredByAlbumName.length} of ${albums.length}`}</ListSubheader>
                        {filteredByAlbumName.length > 0 ? filteredByAlbumName.map((album, index) => (
                            <ListItem key={`album-${index}`}>
                                <ListItemButton component={Link} to={`/session/${album.dateSlug}`}>
                                    <ListItemAvatar>
                                        <Avatar src={album.img} />
                                    </ListItemAvatar>
                                    <ListItemText primary={album.title} />
                                </ListItemButton>
                            </ListItem>
                        )) : <ListItem><ListItemText primary="No Albums Found" /></ListItem>}
                        
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}