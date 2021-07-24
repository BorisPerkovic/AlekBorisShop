/*================================================== 
  -function for displaying products from cart list
  -allow user to remove product from cart table
  -allow user order products from cart table
================================================== */

/* import all necessary classes and functions */
import { Cart } from "../class/cart.class.js";

/* html handlers */
const cartNumber = document.querySelectorAll(".cartNumber");
const table = document.querySelector("#table");
const tbody = document.querySelector("#tbody");
const emptyCart = document.querySelector("#emptyCart");
const sum = document.querySelector("#sum");
const orderBtn = document.querySelector("#orderBtn");

/* instance for cart */
const cart = new Cart();

/* check if in local storage are set shopCart object, if it is add it to Cart class  and create table body*/
if(localStorage.getItem("shopCart") !== null) {
  const shopCart = JSON.parse(localStorage.getItem("shopCart"));
  shopCart.forEach(element => cart.addToCart(element));
  table.classList.remove("hide");
  tbody.innerHTML = cart.getCart();  
} else {
  emptyCart.classList.remove("hide");
}

/* function for remove product from cart table or order products */
const cartTable = () => {

  sum.textContent = cart.orderSum();

  let tr = document.querySelectorAll(".tr");
  let cartTrash = document.querySelectorAll(".cartTrash");
  let cartToStorage = cart.cartList;

  /* on click trash icon remove selected product from table and from cart list */
  cartTrash.forEach((element) => {
    element.addEventListener("click", () => {

      if(confirm("You are about to remove product from cart! Are you sure?")) {

        let index = element.getAttribute("data-index");
        let id = element.getAttribute("data-id");

        for(let i = 0; i < cartToStorage.length; i++) {
          if(cartToStorage[i].productID == id) {
            sum.textContent = parseFloat(sum.textContent) - parseFloat(cartToStorage[i].productPrice);
            cartToStorage.splice(i, 1);
            break;
          }
        };

        tr[index].remove();
        cartNumber.forEach(element => element.textContent = cartToStorage.length);
        cartToStorage = JSON.stringify(cartToStorage);
        localStorage.setItem("shopCart", cartToStorage);
        cartToStorage = JSON.parse(cartToStorage);

        if (cartToStorage.length === 0) {
          table.classList.add("hide");
          emptyCart.classList.remove("hide");
          localStorage.removeItem("shopCart");
        }
      }  
      
    });
  });

  /* on click order button, remove shopCart item from local storage - simulating real order all products from table  */
  orderBtn.addEventListener("click", () => {

    if(confirm("You are about to order products! Are you sure?")) {
      table.classList.add("hide");
      emptyCart.classList.remove("hide");
      tbody.innerHTML = "";
      localStorage.removeItem("shopCart");
      cartNumber.forEach(element => element.textContent = "0");
    }

  });

};

/* export cartTable function */
export {cartTable};