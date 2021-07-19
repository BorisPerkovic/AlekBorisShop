import { Products } from "../class/products.class.js";
import { ShowProducts } from "../class/getproducts.class.js";

const moveProduct = new ShowProducts();

const spinner = document.querySelector("#spinner");
const products_list = document.querySelector("#products_list");
const footer = document.querySelector("#footer");

const categoryRequest = ( data ) => {
      
      data.forEach(element => {
        let product = new Products(element.id, element.image, element.title, element.description, element.price);
        moveProduct.addProduct(product);
      });

      products_list.innerHTML = moveProduct.getProducts();
      spinner.remove();
      footer.classList.remove("hide");

      let art = document.querySelectorAll(".article");

      art.forEach(element => {
        element.addEventListener("click", function (event) {
          event.preventDefault();
          let product_id = element.getAttribute("data-id");
          localStorage.setItem("productId", product_id);
          window.location.assign("product.html");
        });
      });
};

export {  categoryRequest };