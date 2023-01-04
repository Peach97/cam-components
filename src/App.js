import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./views/landing-page";
import FeaturePage from "./views/Features/features";
import PricingPage from "./views/Pricing/pricing";
import Toggler from "./lib/theme";
import { Box } from "@mui/material";

function App() {
  return (
    <Toggler>
      <Box className="App">
        <Navbar />
        <LandingPage />
        <FeaturePage />
        <PricingPage />
      </Box>
    </Toggler>
  );
}

export default App;
