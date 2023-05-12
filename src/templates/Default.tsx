import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import './CedarvilleCursive-Regular.ttf';
import './Default.scss';
interface DefaultTemplateProps {
  children: ReactNode;
}

export function DefaultTemplate(props: DefaultTemplateProps) {
  const { children } = props;
	return (
		<Box className="default-template">
      <Box className="default-template__background"></Box>
      <AppBar
        className="default-template__header"
        position="fixed"
        color="transparent"
        elevation={0}>
        <Toolbar>
          <Box className="default-template__logo">
            <img src="/logo.jpg" alt="All In One Take" />
          </Box>
          <Box>
            <Typography className="default-template__title cursive -white" variant="h4">All In One Take</Typography>
            <Typography className="default-template__subtitle -white">leave your comfort zone at the door</Typography>
          </Box>
          <Box className="-spacer"></Box>
          <IconButton>
            <MenuIcon className="header__menu-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box className="default-template__content">
        {children}
      </Box>
		</Box>
	)
}