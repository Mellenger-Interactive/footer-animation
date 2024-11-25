import { MellengerFooterAnimation } from "./animations/mellenger-footer-animation";
import { MellengerHomePageAnimation } from "./animations/mellenger-homepage-animation";

window.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById('hp-hero-bg')) {
      MellengerHomePageAnimation('hp-hero-bg'); 
    }
    if(document.getElementById('footer-wrap')) {
      MellengerFooterAnimation('footer-wrap')
    }
  });
