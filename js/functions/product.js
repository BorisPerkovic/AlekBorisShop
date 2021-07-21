import { Cart } from "../class/cart.class.js";
import { Products } from "../class/products.class.js";

const product_img = document.querySelector("#product_img");
const product_info = document.querySelector("#product_info");
const product_description = document.querySelector("#product_description");
const spinner = document.querySelector("#spinner");
const footer = document.querySelector("#footer");
const cartNumber = document.querySelectorAll(".cartNumber");

const cart = new Cart();

if (localStorage.getItem("shopCart") !== null) {
    const shopCart = JSON.parse(localStorage.getItem("shopCart"));
    shopCart.forEach(element => cart.addToCart(element));
    cartNumber.forEach(element => element.textContent = cart.cartList.length);
}

const product = (data) => {

    let product = new Products(data.id, data.image, data.title, data.description, data.price);
    console.log(product);
    product_img.innerHTML = `<img src='${product.productsImg}' class='img-fluid' alt='product'>`;

    product_info.innerHTML = `<p>Category: ${data.category}</p>
                              <h4>Price: ${product.productPrice} USD</h4>
                              <h5>Title: ${product.productTitle}</h5>
                              <p class='lead'>Description: ${product.productDecsription}</p>
                              <p class='text-center my-2 py-1 bg-success text-white rounded shoppingCart'>add to <i class="fas fa-shopping-cart"></i></p>`;

    spinner.remove();
    footer.classList.remove("hide");

    let cartbtn = document.querySelectorAll(".shoppingCart");
    cartbtn.forEach((element) => {
  
        element.addEventListener("click", (event) => {
  
          if(localStorage.getItem("username") !== null) {
            event.stopImmediatePropagation();
            cart.addToCart(product);
            cartNumber.forEach(element => element.textContent = cart.cartList.length);
            let cartToStorage = JSON.stringify(cart.cartList);
            localStorage.setItem(`shopCart`, cartToStorage);
          } else {
            alert("You must be log in to add product to cart!");
            event.stopImmediatePropagation();
          }
          
        });
      });

}
export {
    product
};