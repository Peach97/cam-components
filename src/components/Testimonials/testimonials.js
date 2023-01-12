import { Avatar, Box, Typography } from "@mui/material";
import * as React from "react";
import axios from "axios";
import "./testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://testimonialapi.toolcarton.com/api")
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(function () {
        console.log("data fetched");
      });
  }, []);

  const getTestimonials = () => {
    testimonials.forEach((testimonial, index /*array*/) => {
      console.log(testimonial);
    });
  };

  if (testimonials.length) {
    getTestimonials();
    return (
      <>
        {testimonials.map((testimonial) => (
          <Box
            className="testimonials"
            color={"primary.text.primary"}
            bgcolor={"background.highlight"}
          >
            <Box sx={{ height: "1rem", width: "100%", display: "flex" }}>
              <Typography color={"primary.text.social"} fontSize="0.65rem">
                {testimonial.designation}
              </Typography>
              <Avatar
                sx={{ marginLeft: "auto", width: "fit-content" }}
                alt={testimonial.name.toString()}
                src={testimonial.avatar.toString()}
              />
            </Box>
            <Typography
              color={"primary.text.social"}
              variant="subtitle"
              fontSize="1.15rem"
              fontWeight={400}
              sx={{ paddingTop: "1rem" }}
            >
              {testimonial.name}
            </Typography>
            <br />
            <div className="testimonials-text">
              <Typography
                fontSize="1rem"
                fontWeight={400}
                sx={{ paddingTop: "1rem" }}
              >
                {testimonial.message}
              </Typography>
            </div>
          </Box>
        ))}
      </>
    );
  }
}

export default function TestimonialsBar() {
  // React.useEffect(() =>{
  // })
  return (
    <>
      <Box
        className="testimonials-box"
        bgcolor={"background.transparent"}
        component="div"
      >
        <Testimonials />
      </Box>
    </>
  );
}
