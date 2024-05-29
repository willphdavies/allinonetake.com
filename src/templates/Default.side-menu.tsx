import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  debounce,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

interface DefaultSideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export function DefaultSideMenu(props: DefaultSideMenuProps) {
  const { isOpen, setIsOpen } = props;
  const [qs, setQs] = useSearchParams();
  const current = qs.get("search") ? String(qs.get("search")) : "";
  const { pathname } = useLocation();
  const [value, setValue] = useState(current);
  const updateFilterState = useMemo(
    () =>
      debounce((val) => {
        qs.set("search", val);
        setQs(qs);
      }, 300),
    [qs, setQs]
  );
  useEffect(() => {
    setValue("");
  }, [pathname]);
  useEffect(() => {
    updateFilterState(value);
  }, [value, updateFilterState]);
  return (
    <Drawer anchor="right" open={isOpen}>
      <Box
        className="side-menu"
        sx={{ width: 250 }}
        component="aside"
        role="presentation"
        onClick={() => setIsOpen(false)}
      >
        <List className="side-menu__list" disablePadding>
          <ListItem>
            <ListItemText>
              <TextField
                id="search"
                value={value}
                onClick={(ev) => ev.stopPropagation()}
                onChange={(ev) => setValue(ev.target.value)}
              />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/about">
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
