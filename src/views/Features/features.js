import * as React from "react";
import { Box } from "@mui/system";
import "../../App.css";
import { Grid, IconButton, Typography } from "@mui/material";
import FeaturesCard from "./Card";
// import myScroll from "../../components/utils/gsap";

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
  // React.useEffect(() => {
  //   myScroll(".icon-btn-box", ".icon-btn-box");
  // }, []);

  return (
    <div id="second" className="panel2">
      <Box
        className="icon-btn-box"
        bgcolor="primary.main"
        color={"primary.text.primary"}
        sx={{
          background: `linear-gradient(to bottom, #088F8F 50%, #121212 0%)`,
        }}
      >
        <Grid justifyContent="center" container>
          <Typography
            component="div"
            fontWeight={800}
            fontSize="2.5rem"
            textAlign="center"
            width="100%"
            sx={{ padding: "5rem 10rem 0 10rem" }}
          >
            What I can do for you.
          </Typography>
          <Typography
            component="div"
            fontWeight={400}
            fontSize="1.05rem"
            textAlign="center"
            variant="subtitle"
            width="100%"
            sx={{ margin: "1.5rem 10rem 0 10rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consectetur fermentum risus id blandit. Donec imperdiet nisi non
            tortor eleifend vehicula. Vestibulum id risus nec est faucibus
            aliquet. Ut vulputate arcu eget felis pellentesque, eu dictum orci
            consequat.
          </Typography>
          <Box
            className="feature-text-box"
            sx={{ bgcolor: "transparent", border: "none" }}
          >
            <FeaturesCard />
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
