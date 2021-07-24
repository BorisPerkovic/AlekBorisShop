/*================================================== 
 ShowProducts class
 -creating products list from fake store API and displaying on screen
 -having methods for creating products article card
===================================================*/

class ShowProducts {
  constructor() {
    this.productsList = [];
  };

  addProduct(object) {
    this.productsList.push(object);
  }
  /*  products article cards */
  getProducts() {
    let html = "";
    this.productsList.forEach(element => {
      html += `<article class='col-lg-3 col-md-4 col-sm-6 col-12 mb-2 px-2'>
                <div class="p-2 d-flex flex-column h-100 border rounded shadow article" data-id='${element.productID}'>
                  <div class='img_handler'>
                    <img src='${element.productsImg}' class='img-fluid' alt='${element.productTitle}'>
                  </div>

                  <div class='product_handler'>
                    <h5>${element.productTitle.slice(0, 48)}</h5>
                    <p>${element.productDecsription.slice(0, 130)} ...</p>
                  </div>
                  <h4 class='text-center'>${element.productPrice} USD</h4>
                  <p class='text-center my-2 py-1 bg-success text-white rounded shoppingCart'>add to <i class="fas fa-shopping-cart"></i></p>
                </div>
              </article>`;

    });
    return html;
  }

};

/* export show products class */
export { ShowProducts };