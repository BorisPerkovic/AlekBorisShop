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
    this.cartList.forEach((element , index)=> {
      html += `<tr class='tr'>
                  <td><img src='${element.productsImg}' alt='${element.productTitle}'></td>
                  <td class='mt-5'>${element.productTitle}</td>
                  <td>${element.productPrice}</td>
                  <td class='cartTrash' data-index='${index}' data-id='${element.productID}'><i class="fas fa-trash-alt"></i></td>
              </tr>`;
    });

    return html;
  }

  orderSum() {
    let sum = 0;
    this.cartList.forEach(element => sum += element.productPrice);
    return sum;
  };

};

export { Cart };