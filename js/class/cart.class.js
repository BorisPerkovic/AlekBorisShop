import { Products } from "./products.class.js";

class Cart {
  constructor() {
    this.cartList = [];
  }

  addToCart (obj) {
    if(obj instanceof Products)
    this.cartList.push(obj);
  }

};

export { Cart };