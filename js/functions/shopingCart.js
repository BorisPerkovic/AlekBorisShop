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
  let html = "";
  cart.cartList.forEach(element => {
  html += `<tr>
                <td><img src='${element.productsImg}' alt='${element.productTitle}'></td>
                <td class='mt-5'>${element.productTitle}</td>
                <td>${element.productPrice}</td>
                <td class='cartTrash'><i class="fas fa-trash-alt"></i></td>
            </tr>`;
  });
  tbody.innerHTML = html;
  deleteItem();
}


const deleteItem = (element) => {

      let id = element.getAttribute("data-id");
      cart.cartList.splice(id, 1);
      cartNumber.forEach(element => element.textContent = cart.cartList.length);
      let cartToStorage = JSON.stringify(cart.cartList);
      localStorage.setItem("shopCart", cartToStorage);
      //cartTable();
}
export {cartTable , deleteItem };