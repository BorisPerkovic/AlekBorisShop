/*================================================== 
 Products class
 -creating products instances before add to ShowProducts list
===================================================*/

class Products {
  constructor(id, image, title, decsription, price) {
    this.productID = id;
    this.productsImg = image;
    this.productTitle = title;
    this.productDecsription = decsription;
    this.productPrice = price;
  };
};

/* export products class */
export { Products };