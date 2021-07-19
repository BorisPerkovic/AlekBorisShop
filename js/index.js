import { fetchAllProducts } from "./functions/endpoints.js";
import { productArticle } from "./functions/all_products.js";

fetchAllProducts()
  .then( data => productArticle(data));