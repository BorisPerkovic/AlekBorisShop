class Cart {
  constructor() {
    this.cartList = [];
  }

  addToCart (obj) {
    if(obj)
    this.cartList.push(obj);
  }

};

export { Cart };