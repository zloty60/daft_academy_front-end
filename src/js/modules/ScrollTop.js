import throttle from "lodash/throttle";

class ScrollTop {
  constructor() {
    this.scrollBtn = document.querySelector("#scroll-top-js");
    this.events();
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.showBtn(), 400)
    );

    this.scrollBtn.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }

  showBtn() {
    if (window.scrollY > window.innerHeight * 0.5) {
      this.scrollBtn.classList.add("scroll-top--show");
    } else {
      this.scrollBtn.classList.remove("scroll-top--show");
    }
  }
}

export default ScrollTop;
