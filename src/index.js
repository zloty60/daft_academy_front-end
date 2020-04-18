import "./styles/index.scss";
import Swiper from "swiper";

const mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerColumnFill: "row",
  direction: "horizontal",
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
