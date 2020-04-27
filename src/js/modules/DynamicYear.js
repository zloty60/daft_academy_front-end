class DynamicYear {
  constructor() {
    this.footer = document.querySelector("#footer-js");
    this.date = new Date();
    this.setYear();
  }

  setYear() {
    const year = this.date.getFullYear();
    this.footer.textContent = `©${year} Zonex All rights reserved`;
  }
}

export default DynamicYear;
