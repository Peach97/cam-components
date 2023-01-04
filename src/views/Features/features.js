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
  React.useEffect(() => {
    var panel = document.querySelector("#second");
    if (panel) {
      window.addEventListener("scroll", () => {
        const offsetTop = panel.getBoundingClientRect().top;
        if (offsetTop <= 0) {
          panel.classList.add(".sticky");
        }
      });
    }
  });

  return (
    <div id="second" className="panels">
      <Box
        className="icon-btn-box"
        color={"primary.text.primary"}
        sx={{
          background: `linear-gradient(to bottom, #8A00FF 45%, #16161d 15%)`,
        }}
      >
        <Grid justifyContent="center" bgcolor="transparent" container>
          <Typography
            component="div"
            fontWeight={800}
            fontSize="2rem"
            textAlign="center"
            width="100%"
            sx={{ margin: "10rem 10rem 0 10rem" }}
          >
            What I can do for you.
          </Typography>
          <Typography
            component="div"
            fontWeight={600}
            fontSize="1.15rem"
            textAlign="center"
            variant="subtitle"
            width="100%"
            sx={{ margin: "2.5rem 10rem 0 10rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consectetur fermentum risus id blandit. Donec imperdiet nisi non
            tortor eleifend vehicula. Vestibulum id risus nec est faucibus
            aliquet. Ut vulputate arcu eget felis pellentesque, eu dictum orci
            consequat.
          </Typography>
          {icons.map((icon, index) => (
            <Grid
              color={"primary.text.primary"}
              bgcolor="primary.secondary"
              md={2.5}
              sm={1}
              item
              key={index}
              sx={{
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
              }}
              className="icon-btns"
            >
              {/* <IconButton
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
              </IconButton> */}
              {/* <Typography
                color={"primary.text.primary"}
                variant="h5"
                fontWeight={600}
                textAlign="center"
                gutterBottom
              >
                {icon.title}
              </Typography> */}
              {/* <Typography
                textAlign="center"
                fontSize="18px"
                color={"primary.text.primary"}
              >
                {icon.subtitle}
              </Typography> */}
            </Grid>
          ))}
          <Box className="feature-text-box">
            <FeaturesCard />
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
