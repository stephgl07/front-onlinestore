import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Layout from "./shared/layout/Layout";
import Theme from "./config/ThemeConfig";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = React.useMemo(() => Theme(darkMode), [darkMode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
