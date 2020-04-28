import "./styles/index.scss";
import Swiper from "swiper";
import DynanicYear from "./js/modules/DynamicYear";
import Product from "./js/modules/Product";
import ScrollTop from "./js/modules/ScrollTop";

function startJs() {
  window.addEventListener("DOMContentLoaded", (event) => {
    new DynanicYear();
    new Product();
    new ScrollTop();
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      slidesPerColumnFill: "row",
      direction: "horizontal",
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
}

startJs();
