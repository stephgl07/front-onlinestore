import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import * as IconsMaterial from "@mui/icons-material";
import AppBar from "./AppBar";

interface TitleBarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const TitleBar: React.FC<TitleBarProps> = ({
  isOpen,
  drawerWidth,
  toggleDrawer,
  toggleDarkMode,
  darkMode,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        open={isOpen}
        drawerwidth={drawerWidth}
        enableColorOnDark
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <IconsMaterial.MenuRounded />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tranzact Online Store
          </Typography>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? (
              <IconsMaterial.Brightness7Rounded />
            ) : (
              <IconsMaterial.Brightness2Rounded />
            )}
          </IconButton>
          <Button color="inherit">Acerca de</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TitleBar;
