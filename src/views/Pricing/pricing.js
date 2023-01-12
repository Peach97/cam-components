import * as React from "react";
import { Box } from "@mui/system";
import "../../App.css";
// import myScroll from "../../components/utils/gsap";

export default function PricingPage() {
  // React.useEffect(() => {
  //   myScroll(".pricing-box", ".pricing-box");
  // }, []);
  return (
    <div className="panel3">
      <Box
        bgcolor="primary.main"
        className="pricing-box"
        sx={{
          width: "100%",
          height: "100vh",
          // `linear-gradient(to bottom, #088F8F 50%, #16161d 0%)`,
        }}
      ></Box>
    </div>
  );
}
