import "./styles/index.scss";
import Swiper from "swiper";

const mySwiper = new Swiper(".swiper-container", {
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
