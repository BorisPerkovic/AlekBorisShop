/*================================================== 
 -endpoints for API requiests and users.json
===================================================*/

const fetchAllProducts = () => {
  const endpointAllProducts= `https://fakestoreapi.com/products/`;
  return fetch(endpointAllProducts)
    .then( response => response.json());
}

const fetchProductsByCategory = (category) => {
  const endpointProductsByCategory = `https://fakestoreapi.com/products/category/${category}`;
  return fetch(endpointProductsByCategory)
    .then( response => response.json());
}

const fetchSingleProduct = (id) => {
  const endpointSingleProduct = `https://fakestoreapi.com/products/${id}`;
  return fetch(endpointSingleProduct)
    .then( response => response.json());
}

const fetchUsersJson = () => {
  const endpointUsers = "js/users.json";
  return fetch(endpointUsers)
    .then( response => response.json());
}

/* export endpoint */
export { fetchAllProducts, fetchSingleProduct, fetchProductsByCategory, fetchUsersJson };