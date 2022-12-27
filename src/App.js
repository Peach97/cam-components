import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./views/landing-page";
import FeaturePage from "./views/features";
import Toggler from "./lib/theme";
import { Box } from "@mui/material";

function App() {
  return (
    <Toggler>
      <Box className="App">
        <Navbar />
        <LandingPage />
        <FeaturePage />
      </Box>
    </Toggler>
  );
}

export default App;
