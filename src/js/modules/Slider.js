import Swiper from "swiper";
import axios from "axios";
import leftArrow from "./../../assets/icons/kz-long-arrow-left.svg";
import rightArrow from "./../../assets/icons/kz-long-arrow-right.svg";

class Slider {
  constructor() {
    this.swiperWrapper = document.querySelector("#swiper-wrapper-js");
    this.spinner = document.querySelector("#slider-spinner-js");
    this.slider = document.querySelector("#slider-container-js");
    this.renderSliderElement();
  }

  renderSliderElement() {
    axios
      .get("https://my-json-server.typicode.com/zloty60/products_api/slider")
      .then((response) => {
        this.spinner.remove();
        response.data.forEach((el) => {
          this.injectSlideElement(el);
        });
        this.injectButtonsSlider();
        this.setUpSwiper();
      })
      .catch((error) => {
        this.spinner.remove();
        this.injectError();
      });
  }

  setUpSwiper() {
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
  }

  injectSlideElement(el) {
    this.swiperWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div class="swiper-slide">
        <div class="slider__card">
          <div class="slider__card-content-wrapper">
            <img src=${el.img}  class="slider__img" />
            <div class="slider__txt">
              <p class="slider__card-name">${el.name}</p>
              <span class="slider__card-price">$${el.price}</span>
            </div>
          </div>
        </div>
      </div>
          `
    );
  }

  injectButtonsSlider() {
    this.slider.insertAdjacentHTML(
      "beforeend",
      `   <button class="swiper-button-next">
          <img src=${rightArrow} alt="" />
        </button>
        <button class="swiper-button-prev">
          <img src=${leftArrow} alt="" />
        </button>`
    );
  }

  injectError() {
    this.slider.insertAdjacentHTML(
      "beforeend",
      `<p class="slider__error">coś poszło nie tak, spróbuj ponownie</p>`
    );
  }
}

export default Slider;
