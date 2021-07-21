class Cart {
  constructor() {
    this.cartList = [];
  }

  addToCart (obj) {
    if(obj)
    this.cartList.push(obj);
  }

  getCart() {
    let html = "";
    this.cartList.forEach(element => {
      html += `<tr class='tr'>
                  <td><img src='${element.productsImg}' alt='${element.productTitle}'></td>
                  <td class='mt-5'>${element.productTitle}</td>
                  <td>${element.productPrice}</td>
                  <td class='cartTrash'><i class="fas fa-trash-alt"></i></td>
              </tr>`;
    });

    return html;
  }

};

export { Cart };