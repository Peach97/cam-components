import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./views/landing-page";
import FeaturePage from "./views/Features/features";
import PricingPage from "./views/Pricing/pricing";
import Toggler from "./lib/theme";
import { Box } from "@mui/material";
import ASScroll from "@ashthornton/asscroll";
import gsap from "gsap";
import TestimonialsBar from "./components/Testimonials/testimonials";

function App() {
  React.useEffect(() => {
    const asscroll = new ASScroll({
      disableRaf: true,
      ease: 0.04,
    });

    asscroll.enable({
      newScrollElements: document.querySelector(".scroll-container").children,
      reset: true,
    });
    console.log(asscroll.scrollElements);
    gsap.ticker.add(asscroll.update);
  }, []);

  return (
    <Toggler>
      <Navbar />
      <div className="scroll-container" asscroll-container="true">
        <Box className="App" asscroll-container="true">
          <LandingPage />
          <FeaturePage />
          <PricingPage />
          <TestimonialsBar />
        </Box>
      </div>
    </Toggler>
  );
}

export default App;
