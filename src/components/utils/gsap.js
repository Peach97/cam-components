import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function myScroll(scrollContainer, triggerClass) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(scrollContainer, {
    borderRadius: "0%",
    scrollTrigger: {
      start: "top bottom",
      end: "top top",
      scrub: 0.2,
      trigger: triggerClass,
    },
  });
}
