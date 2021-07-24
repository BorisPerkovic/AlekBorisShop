import { Products } from "../class/products.class.js";
import { ShowProducts } from "../class/getproducts.class.js";
import { Cart } from "../class/cart.class.js";

const products = new ShowProducts();
const cart = new Cart();

const spinner = document.querySelector("#spinner");
const products_list = document.querySelector("#products_list");
const footer = document.querySelector("#footer");
const cartNumber = document.querySelectorAll(".cartNumber");

if(localStorage.getItem("shopCart") !== null) {
  const shopCart = JSON.parse(localStorage.getItem("shopCart"));
  shopCart.forEach(element => cart.addToCart(element));
}

const categoryRequest = ( data ) => {
      
      data.forEach(element => {
        let product = new Products(element.id, element.image, element.title, element.description, element.price);
        products.addProduct(product);
      });

      products_list.innerHTML = products.getProducts();
      spinner.remove();
      footer.classList.remove("hide");

      let art = document.querySelectorAll(".article");
      let cartbtn = document.querySelectorAll(".shoppingCart");

      art.forEach(element => {
        element.addEventListener("click", function (event) {
          event.preventDefault();
          let product_id = element.getAttribute("data-id");
          localStorage.setItem("productId", product_id);
          window.location.assign("product.html");
        });
      });

      cartbtn.forEach((element, index) => {
        element.setAttribute("data-id", index);
  
        element.addEventListener("click", (event) => {
  
          if(localStorage.getItem("username") !== null) {
            event.stopImmediatePropagation();
            let id = element.getAttribute("data-id");
            cart.addToCart(products.productsList[id]);
            cartNumber.forEach(element => element.textContent = cart.cartList.length);
            let cartToStorage = JSON.stringify(cart.cartList);
            localStorage.setItem(`shopCart`, cartToStorage);
          } else {
            alert("You must be log in to add product to cart!");
            event.stopImmediatePropagation();
          }
          
        });
      });
};

export {  categoryRequest };