/*================================================== 
  -import all necessary classes and functions, endpoint  
  -activate category request  function after load products by category from API
  -include in categories.html file
================================================== */

import { fetchProductsByCategory } from "./functions/endpoints.js";
import { categoryRequest } from "./functions/categories_products.js";

const elValue = localStorage.getItem("category");
const categories_title = document.querySelector("#categories_title");
categories_title.textContent = elValue.toUpperCase();

fetchProductsByCategory(elValue)
  .then( data => categoryRequest(data));