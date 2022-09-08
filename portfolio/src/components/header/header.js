import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Button } from "@mui/material";
const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "white",
  color: "black",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header(props) {
  return (
    <AppBar position="fixed" open={props.toggleStatus}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={props.handleSidebarToggle}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "flex", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="Linkedin"
            color="inherit"
            href="https://www.linkedin.com/in/niketanmoon/"
            target={"_blank"}
          >
            <Badge badgeContent={0} color="error">
              <LinkedInIcon color="info" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="Github"
            color="inherit"
            href="https://github.com/niketanmoon"
            target={"_blank"}
          >
            <Badge badgeContent={0} color="error">
              <GitHubIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="Get in touch"
            color="inherit"
            target="_top"
            rel="noopener noreferrer"
            href={`mailto:niketanmoon@gmail.com`}
          >
            <Badge badgeContent={0} color="error">
              <FingerprintIcon />
            </Badge>
          </IconButton>
          <Button
            variant="text"
            size="small"
            href="https://drive.google.com/file/d/1921oL7n0_KwLClWo2e3OhHVpwsFIhomb/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
        </Box>
        {/* <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
