export const ParallaxScroll = (styleClass, priorPanel) => {
  var panel = document.querySelector(styleClass);
  console.log(styleClass);
  var landingPanel = document.querySelector(priorPanel);
  if (panel) {
    window.addEventListener("scroll", () => {
      var offsetTop =
        panel.getBoundingClientRect().height +
        landingPanel.getBoundingClientRect().height;

      var st = window.scrollY;
      console.log(`window top: ${st}`);
      console.log(`offsetTop: ${offsetTop}`);
      if (offsetTop <= st) {
        panel.classList.add("sticky");
        // console.log(panel.classList);
      } else {
        panel.classList.remove("sticky");
      }
    });
  }
};
