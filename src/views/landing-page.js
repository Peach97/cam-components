import * as React from "react";
import "../App.css";
import { Typography, Box } from "@mui/material";
import MyButton from "../components/btn";
import Scene from "../components/Three/Scene";
import background from "../images/Background6.png";

export default function LandingPage() {
  return (
    <Box id="first" bgcolor="background.default" className="panels">
      <Box
        sx={{ pt: "2.5rem", color: "text.primary" }}
        component="div"
        className="landing-text-box"
      >
        <Typography
          sx={{ color: "primary.text.primary" }}
          fontSize="3.75rem"
          fontWeight="800"
          className="landing-text"
        >
          I help
          <div className="sentence">
            <div className="slidingVertical">
              <span> grow</span>
              <span> design</span>
              <span> develop</span>
              <span> deploy</span>
            </div>
            <div>products</div>
          </div>
          Lets get to it.
          <Box sx={{ mt: "2.5rem" }}>
            <MyButton fontSize="1.5rem" padding="0.25rem 2rem 0.25rem 0">
              See Pricing
            </MyButton>
          </Box>
        </Typography>
        <Scene />
      </Box>
      {/* <img height={400} width={800} className="landing-img" src={me} alt="/" /> */}
    </Box>
  );
}
