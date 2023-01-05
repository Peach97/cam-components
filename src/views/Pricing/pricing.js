import * as React from "react";
import { Box } from "@mui/system";
import "../../App.css";
import { ParallaxScroll } from "../../components/utils/parallax";

export default function PricingPage() {
  // React.useEffect(() => {
  //   ParallaxScroll(".panel3", ".panel2");
  // });
  return (
    <div className="panel3">
      <Box
        bgcolor="background.default"
        sx={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
}
