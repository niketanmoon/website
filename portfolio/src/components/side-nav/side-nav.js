import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import { Avatar, Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Header from "../header/header";
import appRoutes from "../../router/app-routes";
import { NavLink, useLocation } from "react-router-dom";
import "./side-nav.css";

const drawerWidth = 250;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
  marginTop: "20px",
}));

const useStyles = makeStyles({
  listItemNormal: {
    padding: "16px !important",
  },
  listItemActive: {
    borderRight: "solid #d669b4 4px !important",
    backgroundColor: "#d669b4",
  },
  itemIconActive: {
    color: "#d669b4 !important",
  },
  itemTextActive: {
    color: "#d669b4 !important",
  },
});
export default function SideNavMenu({
  sideprops,
  toggleStatus,
  handleSidebarToggle,
}) {
  const location = useLocation();
  const classes = useStyles();
  const sideNavItems = appRoutes.filter((it) => it.isNavMenu);
  const entryPath = "";
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        name={sideprops.name}
        handleSidebarToggle={handleSidebarToggle}
        toggleStatus={toggleStatus}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={toggleStatus}
      >
        <DrawerHeader>
          <Avatar
            sx={{
              width: "135px",
              height: "140px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            src="/niklogo.png"
          />
        </DrawerHeader>

        {/* <Typography style={{ display: "flex", justifyContent: "center" }}>
          Niketan
        </Typography>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          Moon
        </Typography> */}
        <Divider />

        <List>
          {sideNavItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={NavLink}
              to={`${entryPath}${item.path}`}
              className={`${classes.listItemNormal} ${
                entryPath + item.path === location.pathname
                  ? classes.listItemActive
                  : ""
              }`}
              selected={`${entryPath}${item.path}` === location.pathname}
            >
              {(() => {
                if (item.icon) {
                  if (typeof item.icon === "string") {
                    return (
                      <Icon
                        className={`item-icon ${
                          entryPath + item.path === location.pathname
                            ? classes.itemIconActive
                            : ""
                        }`}
                      >
                        {item.icon}
                      </Icon>
                    );
                  } else {
                    return (
                      <item.icon
                        className={`item-icon ${
                          entryPath + item.path === location.pathname
                            ? classes.itemIconActive
                            : ""
                        }`}
                      />
                    );
                  }
                } else {
                  return (
                    <span
                      className={`item-icon ${
                        entryPath + item.path === location.pathname
                          ? classes.itemIconActive
                          : ""
                      }`}
                    >
                      {item.iconText}
                    </span>
                  );
                }
              })()}

              <ListItemText
                className={
                  `${entryPath}${item.path}` === location.pathname
                    ? classes.itemTextActive
                    : ""
                }
                primary={item.name}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
