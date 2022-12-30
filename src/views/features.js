import * as React from "react";
import { Box } from "@mui/system";
import "../App.css";
import { Typography } from "@mui/material";

export default function FeaturePage() {
  return (
    <Box
      id="second"
      bgcolor="background.default"
      className="panels"
      component="section"
    >
      {/* <Box
        sx={{
          display: "flex",
          color: "primary.text.primary",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="feature-text-box"
      >
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography variant="h4" fontWeight={500} mt="7.5rem">
            Hi, I'm Cameron. Pleased to meet you.
          </Typography>
          <Typography variant="h6" lineHeight={1.5} mt="2rem">
            Beginning my journey as a freelance developer in mid to late 2021, I
            have had the opportunity to work on a variety of projects for
            startups. I specialize in building scalable, user-oriented
            applications supported with clean and efficient code. I am creative
            and curious, constantly finding and implementing new technologies
            into my projects in order to surpass the status quo.
          </Typography>
        </Box>
      </Box> */}
    </Box>
  );
}
