import heartIcon from "./../../assets/icons/-e-kz-heart.svg";
import boltIcon from "./../../assets/icons/-e-kz-bolt-line.svg";
import numberOneIcon from "./../../assets/icons/kz-number-one.svg";
import fireIcon from "./../../assets/icons/-e-kz-fire.svg";
import starIcon from "./../../assets/icons/-e-kz-star-line.svg";

class Product {
  constructor() {
    this.productsHTML = document.querySelector("#products-js");
    this.productsButtonHTML = document.querySelector("#products-btn-js");
    this.events();
  }

  events() {
    this.productsButtonHTML.addEventListener("click", () => {
      this.productsButtonHTML.remove();
      data.forEach((el) => this.injectHtml(el));
    });
  }

  injectHtml(el) {
    this.productsHTML.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-card products__product-card">
        <div class="product-card__img"></div>
        <p class="product-card__speacial">
        <span>
            ${el.special ? ` <img src="${el.special.icon}" alt="" />` : ""}   
        </span>
        ${el.special ? `${el.special.txt}` : ""}
      </p>
        <p class="product-card__name">${el.name}</p>
        <p class="product-card__price">${el.price}</p>
        <button class="product-card__btn">
          <span>Select option</span>
          <img src="${heartIcon}" alt="" />
        </button>
      </div>
    </div>
        `
    );
  }
}

export default Product;

const data = [
  {
    name: "Eye Mesh Boat Shoes",
    price: "$220.00",
    special: {
      txt: "new",
      icon: boltIcon,
    },
  },
  {
    name: "Azure Tote",
    price: "$290.00",
  },
  {
    name: "Backpack with contrasting buckle",
    price: "$80.00 – $125.00",
    special: {
      txt: "BEST SELLER",
      icon: numberOneIcon,
    },
  },
  {
    name: "Shirt in organic cotton classic gingham",
    price: "$59.50",
    special: {
      txt: "BEST SELLER",
      icon: numberOneIcon,
    },
  },
  {
    name: "Tailored indigo jumpsuit",
    price: "$128.00",
    special: {
      txt: "hot",
      icon: fireIcon,
    },
  },
  {
    name: "Triple stone drop earrings",
    price: "$49.50",
    special: {
      txt: "top rate",
      icon: starIcon,
    },
  },
  {
    name: "Backpack with contrasting buckle",
    price: "$158.00",
  },
  {
    name: "Cableknit shawl-collar cardigan",
    price: "$290.00",
  },
];
