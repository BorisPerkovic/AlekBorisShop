import { cartTable, deleteItem } from "./functions/shopingCart.js";

cartTable();

let cartTrash = document.querySelectorAll(".cartTrash");
cartTrash.forEach((element, index) => {
  element.setAttribute("data-id", index);
  element.addEventListener("click", () => {
    deleteItem(element);
    cartTable();
  });  
}); 

