import axios from "axios";

class Promo {
  constructor() {
    this.promo = document.querySelectorAll(".promo-js");
    this.spiners = document.querySelectorAll(".promo__spinner-js");
    this.renderPromo();
  }

  renderPromo() {
    axios
      .get("https://my-json-server.typicode.com/zloty60/products_api/promo")
      .then((response) => {
        response.data.forEach((el) => {
          this.spiners[el.id - 1].remove();
          this.injectImg(el);
        });
      })
      .catch((error) => {
        this.spiners.forEach((el) => el.remove());
        this.promo.forEach((el) => this.injectError(el));
      });
  }

  injectImg(el) {
    this.promo[el.id - 1].insertAdjacentHTML(
      "beforeend",
      `
      <img
        src=${el.img}
        alt=""
        class="promo__img"
      />
    <div class="promo__txt-group">
        <p class="headline headline--light">
            ${el.txt}
        </p>
        <a href="#" class="promo__link">shop now</a>
    </div>
          `
    );
  }

  injectError(el) {
    el.insertAdjacentHTML(
      "beforeend",
      `
        <p class="promo__error">coś poszło nie tak</p>
            `
    );
  }
}

export default Promo;
