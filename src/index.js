import "./styles/index.scss";
import Slider from "./js/modules/Slider";
import DynanicYear from "./js/modules/DynamicYear";
import Product from "./js/modules/Product";
import ScrollTop from "./js/modules/ScrollTop";
import Promo from "./js/modules/Promo";

function startJs() {
  window.addEventListener("DOMContentLoaded", (event) => {
    new DynanicYear();
    new Product();
    new ScrollTop();
    new Slider();
    new Promo();
  });
}

startJs();
