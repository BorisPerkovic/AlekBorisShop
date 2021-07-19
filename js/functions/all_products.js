import { Products } from "../class/products.class.js";
import { ShowProducts } from "../class/getproducts.class.js";

const moveProduct = new ShowProducts();

const producst_list = document.querySelector("#products_list");
const spinner = document.querySelector("#spinner");
const footer = document.querySelector("#footer");

const productArticle = (data) => {

    data.forEach(element => {
      let product = new Products(element.id, element.image, element.title, element.description, element.price);
      moveProduct.addProduct(product);
    });

    producst_list.innerHTML = moveProduct.getProducts();
    spinner.remove();
    footer.classList.remove("hide");

    let article = document.querySelectorAll(".article");

    article.forEach(element => {
      element.addEventListener("click", function (event) {
        event.preventDefault();
        let id = element.getAttribute("data-id");
        localStorage.setItem("productId", id);
        window.location.assign("product.html");
      });
    });

};

export { productArticle };