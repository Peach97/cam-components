import * as React from "react";
import { Box } from "@mui/system";
import "../../App.css";
import { Grid, IconButton, Typography } from "@mui/material";
import FeaturesCard from "./Card";

const icons = [
  {
    title: "Dynamic",
    subtitle:
      "Nobody likes a static web page. I like to bring your page to life.",
    link: "responsive (1)",
  },
  {
    title: "Intuitive",
    subtitle: "Accessibility. Thats the word.",
    link: "brain",
  },
  {
    title: "Speedy",
    subtitle:
      "Fast load times and quick input response. Lag equals missed opportunities.  ",
    link: "speedometer",
  },
  {
    title: "Ambitious",
    subtitle:
      "While stability is the priority, I don't shrink away from new technologies.",
    link: "dream",
  },
];

export default function FeaturePage() {
  return (
    <Box
      id="second"
      bgcolor="background.default"
      className="panels"
      component="section"
    >
      <Box
        className="icon-btn-box"
        color={"primary.text.primary"}
        sx={{
          background: `linear-gradient(to bottom, #8A00FF 45%, #16161d 15%)`,
        }}
      >
        <Grid justifyContent="center" bgcolor="transparent" container>
          {icons.map((icon, index) => (
            <Grid
              color={"primary.text.primary"}
              bgcolor="transparent"
              md={2.5}
              sm={1}
              item
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
              }}
              // className="icon-btns"
            >
              <IconButton
                sx={{
                  m: "0 auto 0 auto",
                  color: "primary.text.primary",
                  width: "30%",
                  marginBottom: "2.5rem",
                }}
              >
                <img
                  height="72px"
                  width="76px"
                  src={require("../../images/" + icon.link + ".png")}
                  alt={`Unable to find ${icons.title}`}
                />
              </IconButton>
              <Typography
                color={"primary.text.primary"}
                variant="h5"
                fontWeight={600}
                textAlign="center"
                gutterBottom
              >
                {icon.title}
              </Typography>
              <Typography
                textAlign="center"
                fontSize="18px"
                color={"primary.text.primary"}
              >
                {icon.subtitle}
              </Typography>
            </Grid>
          ))}
          <Box className="feature-text-box">
            <FeaturesCard />
            {/* <Typography textAlign="center" variant="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum consectetur fermentum risus id blandit. Donec imperdiet
              nisi non tortor eleifend vehicula. Vestibulum id risus nec est
              faucibus aliquet. Ut vulputate arcu eget felis pellentesque, eu
              dictum orci consequat. Praesent elit tellus, sagittis ac interdum
              eu, aliquam vel dolor. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nulla vitae quam lacus. Quisque vel gravida
              elit. Duis commodo molestie gravida. Aliquam erat volutpat.
            </Typography> */}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
