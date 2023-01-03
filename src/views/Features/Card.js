import * as React from "react";
import {
  Card,
  Box,
  Typography,
  IconButton,
  CardContent,
  Grid,
  Icon,
} from "@mui/material";

const card = [
  {
    title: "Front End",
    class: "first-card",
    excerpt: "Web languages:",
    link: "monitor (2)",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Bootstrap",
      "MaterialUI",
    ],
  },
  {
    title: "Back End",
    class: "second-card",
    excerpt: "Storage capabilities:",
    link: "servers (1)",
    skills: [
      "MongoDB",
      "AJAX Libraries",
      "Firebase",
      "ExpressJS",
      "Some Python",
    ],
  },
  {
    title: "Design",
    class: "third-card",
    excerpt: "Creative tools:",
    link: "design",
    skills: ["Figma", "Canva", "Adobe Photoshop", "GIMP", "Blender3D Modeling"],
  },
];

export default function FeaturesCard() {
  return (
    <>
      <Grid className="feature-card-wrapper" bgcolor="transparent" container>
        {card.map((item, index) => (
          <Grid item id="parent-grid" bgcolor="transparent" md={4}>
            <Card
              component="div"
              key={index}
              className={item.class}
              sx={{
                bgcolor: "background.default",
                height: "55rem",
                "&.MuiPaper-root": {
                  borderRadius: "0",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Icon
                  sx={{
                    padding: "0.5rem 0.25rem 0.1rem 0.25rem",
                    margin: "5rem auto 2.5rem auto",
                    backgroundColor: "primary.tertiary",
                    height: "fit-content",
                    width: "fit-content",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    className="feature-icons"
                    height="50px"
                    width="55px"
                    src={require("../../images/" + item.link + ".png")}
                    alt={`Cannot find ${item.title} link`}
                  />
                </Icon>

                <Typography
                  textAlign="center"
                  variant="h4"
                  fontWeight={800}
                  color={"primary.text.primary"}
                  sx={{ margin: "0 0 2.5rem 0" }}
                >
                  {item.title}
                </Typography>
              </Box>

              {/* <Typography
                variant="h6"
                fontWeight={600}
                textAlign="center"
                color={"primary.secondary"}
                sx={{ margin: "0 0 1rem 0" }}
              >
                {item.excerpt}
              </Typography> */}
              {item.skills.map((skill, index) => (
                <>
                  <CardContent
                    sx={{
                      color: "primary.text.primary",
                      justifyContent: "center",
                      textAlign: "center",
                      lineHeight: 1.25,
                      fontWeight: 400,
                      fontSize: "1.1rem",
                    }}
                  >
                    {skill}
                  </CardContent>
                </>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
