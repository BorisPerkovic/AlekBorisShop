/*================================================== 
 Cart class
 -creating cart list when user click on add to cart button
 -having methods for creating cart table and sum of order
===================================================*/

class Cart {
  constructor() {
    this.cartList = [];
  }

  addToCart (obj) {
    if(obj)
    this.cartList.push(obj);
  }

  /* cart table */
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

  /* sum of order */
  orderSum() {
    let sum = 0;
    this.cartList.forEach(element => sum += element.productPrice);
    return sum = sum.toFixed(2);
  };

};

/* export cart class */
export { Cart };