import { Cart } from "../class/cart.class.js";

const cartNumber = document.querySelectorAll(".cartNumber");
const table = document.querySelector("#table");
const tbody = document.querySelector("#tbody");
const emptyCart = document.querySelector("#emptyCart");
const cart = new Cart();

if(localStorage.getItem("shopCart") !== null) {
  const shopCart = JSON.parse(localStorage.getItem("shopCart"));
  shopCart.forEach(element => cart.addToCart(element));
  cartNumber.forEach(element => element.textContent = cart.cartList.length);
}

const cartTable = () => {

  tbody.innerHTML = cart.getCart();

  let tr = document.querySelectorAll(".tr");
  const cartTrash = document.querySelectorAll(".cartTrash");

  cartTrash.forEach((element, index) => {
    element.addEventListener("click", () => {
      console.log(index);
      console.log(element);
      tr[index].remove();
      cart.cartList.splice(index, 1);
      cartNumber.forEach(element => element.textContent = cart.cartList.length);
      let cartToStorage = JSON.stringify(cart.cartList);
      localStorage.setItem("shopCart", cartToStorage);
    });
  });
  
  
}

export {cartTable};