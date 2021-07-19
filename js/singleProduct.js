import { fetchSingleProduct } from "./functions/endpoints.js";
import { product } from "./functions/product.js";

const productId = localStorage.getItem("productId");

fetchSingleProduct (productId)
 .then( data => product(data));

