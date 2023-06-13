import React from "react";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Drawer from "./Drawer";
import * as IconsMaterial from "@mui/icons-material";
import { itemsSideBar } from "./SideBarConfig";
import { NavLink } from "react-router-dom";

interface SideBar {
  isOpen: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
}

const SideBar: React.FC<SideBar> = ({ isOpen, drawerWidth, toggleDrawer }) => {
  return (
    <Drawer variant="permanent" open={isOpen} drawerwidth={drawerWidth}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <IconsMaterial.ChevronLeftRounded />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {itemsSideBar.map((item, index) =>
          item.url === "separator" ? (
            <Divider key={index} sx={{ my: 1 }} />
          ) : item.isExternal ? (
            <ListItemButton
              key={`${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <item.icon style={{ color: "#5a5a5a" }} />
              </ListItemIcon>
              <ListItemText style={{ color: "#5a5a5a" }} primary={item.name} />
            </ListItemButton>
          ) : (
            <NavLink
              key={`${index}`}
              exact
              to={item.url}
              style={{ textDecoration: "none" }}
              activeStyle={{ color: "green" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <item.icon style={{ color: "#5a5a5a" }} />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#5a5a5a" }}
                  primary={item.name}
                />
              </ListItemButton>
            </NavLink>
          )
        )}

        {/* {mainListItems} */}

        {/* {secondaryListItems} */}
      </List>
    </Drawer>
  );
};

export default SideBar;
