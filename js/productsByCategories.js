import { fetchProductsByCategory } from "./functions/endpoints.js";
import { categoryRequest } from "./functions/categories_products.js";

const elValue = localStorage.getItem("category");
const categories_title = document.querySelector("#categories_title");
categories_title.textContent = elValue.toUpperCase();

fetchProductsByCategory(elValue)
  .then( data => categoryRequest(data));