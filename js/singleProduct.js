/*================================================== 
  -import all necessary classes and functions, endpoint  
  -activate producr funciton after load single product from API
  -include in product.html file
================================================== */

import { fetchSingleProduct } from "./functions/endpoints.js";
import { product } from "./functions/product.js";

const productId = localStorage.getItem("productId");

fetchSingleProduct (productId)
 .then( data => product(data));

