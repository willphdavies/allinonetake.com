"use client";
import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

interface DefaultSideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export function DefaultSideMenu(props: DefaultSideMenuProps) {
  const { isOpen, setIsOpen } = props;
  return (
    <Drawer anchor="right" open={isOpen} onClick={() => setIsOpen(false)}>
      <Box
        className="side-menu"
        sx={{ width: 250 }}
        component="aside"
        role="presentation"
        onKeyDown={() => setIsOpen(false)}
      >
        <List className="side-menu__list" disablePadding>
          <ListItem>
            <ListItemButton component={Link} href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} href="/search">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText>Search</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} href="/about">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
