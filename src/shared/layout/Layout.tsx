import React from "react";
import { Route, Switch } from "react-router-dom";
import TitleBar from "../titleBar/TitleBar";
import SideBar from "../sideBar/SideBar";
import { Box, Container, CssBaseline, Grid, Toolbar } from "@mui/material";
import Copyright from "../copyright/Copyright";
import pagesConfig from "../../pages/PagesConfig";

interface LayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ darkMode, toggleDarkMode }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div>
        <TitleBar
          isOpen={open}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <SideBar
          isOpen={open}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
        />
      </div>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container
          sx={{ mt: 4, mb: 4, display: "flex", justifyContent: "center" }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={8}
              lg={9}
              sx={{ maxWidth: "100%!important" }}
            >
              <Switch>
                {pagesConfig.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </Switch>
            </Grid>
          </Grid>
          <Copyright
            sx={{
              p: 4,
              position: "fixed",
              bottom: 0,
              padding: "1rem",
            }}
          />
        </Container>
      </Box>
    </Box>
  );

  // return (
  //   <Router>
  //     <div className="d-flex">
  //       <SideBar isOpen={open} toggleDrawer={toggleDrawer} />
  //       <div className="w-100">
  //         <TitleBar toggleDrawer={toggleDrawer} />
  //         <div className="container">
  //           {/* <Switch>
  //             {routes.map((route) => (
  //               <Route
  //                 key={route.key}
  //                 path={route.path}
  //                 exact={route.exact}
  //                 component={route.component}
  //               />
  //             ))}
  //           </Switch> */}
  //         </div>
  //       </div>
  //     </div>
  //   </Router>
  // );
};

export default Layout;
