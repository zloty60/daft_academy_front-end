import heartIcon from "./../../assets/icons/-e-kz-heart.svg";
import axios from "axios";

class Product {
  constructor() {
    this.productsHTML = document.querySelector("#products-js");
    this.productsButtonHTML = document.querySelector("#products-btn-js");
    this.newArrivals = [];
    this.renderProduct();
  }

  events() {
    this.productsButtonHTML.addEventListener("click", () => {
      this.productsButtonHTML.remove();
      for (let i = 8; i < 16; i++) {
        this.injectProduct(this.newArrivals[i]);
      }
    });
  }

  renderProduct() {
    for (let i = 0; i < 8; i++) {
      this.loader();
    }
    axios
      .get(
        "https://my-json-server.typicode.com/zloty60/products_api/newArrivals"
      )
      .then((response) => {
        this.productsHTML.innerHTML = "";
        this.newArrivals = response.data;
        for (let i = 0; i < 8; i++) {
          this.injectProduct(this.newArrivals[i]);
        }
        this.events();
      })
      .catch((error) => {
        this.productsHTML.innerHTML = "";
        this.injectError();
      });
  }

  loader() {
    this.productsHTML.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-card products__product-card">
        <div class="product-card__img">
        <div class="skeleton-box" style="width: 100%; height: 300px;"></div>
        </div>
        <div class="skeleton-box" style="width: 50%; height: 14px;"></div>
        <br />
        <div class="skeleton-box" style="width: 35%; height: 14px;"></div>
      </div>
    </div>
        `
    );
  }

  injectProduct(el) {
    this.productsHTML.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-card products__product-card">
        <img src=${el.img} class="product-card__img" />
        <p class="product-card__speacial">
        <span>
            ${el.special ? ` <img src="${el.special.icon}" alt="" />` : ""}   
        </span>
        ${el.special ? `${el.special.txt}` : ""}
      </p>
        <p class="product-card__name">${el.name}</p>
        <p class="product-card__price">$${el.price}</p>
        <button class="product-card__btn">
          <span>Select option</span>
          <img src="${heartIcon}" alt="" />
        </button>
      </div>
    </div>
        `
    );
  }

  injectError() {
    this.productsHTML.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-12">
        <p>ładowanie produktów nie powiodło się, spróbuj ponowenie</p>
      </div>
        `
    );
  }
}

export default Product;
