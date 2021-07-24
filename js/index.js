/*================================================== 
  -import product article function, fetch all producs endpoint
  -activate product article function after load products from API
  -include in index.html file
================================================== */

import { fetchAllProducts } from "./functions/endpoints.js";
import { productArticle } from "./functions/all_products.js";

fetchAllProducts()
  .then( data => productArticle(data));