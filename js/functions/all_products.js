import { Products } from "../class/products.class.js";
import { ShowProducts } from "../class/getproducts.class.js";
import { Cart } from "../class/cart.class.js";
import { AllUsers } from "../class/allUsers.class.js";

const products = new ShowProducts();
const cart = new Cart();

const producst_list = document.querySelector("#products_list");
const spinner = document.querySelector("#spinner");
const footer = document.querySelector("#footer");

const productArticle = (data) => {

    data.forEach(element => {
      let product = new Products(element.id, element.image, element.title, element.description, element.price);
      products.addProduct(product);
    });

    producst_list.innerHTML = products.getProducts();
    spinner.remove();
    footer.classList.remove("hide");

    let article = document.querySelectorAll(".article");
    let cartbtn = document.querySelectorAll(".shoppingCart");

    article.forEach(element => {
      element.addEventListener("click", function () {
        let id = element.getAttribute("data-id");
        localStorage.setItem("productId", id);
        window.location.assign("product.html");
      });
    });

    cartbtn.forEach((element, index) => {
      element.setAttribute("data-id", index);
      element.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        let id = element.getAttribute("data-id");
        cart.addToCart(products.productsList[id]);
        console.log(cart.cartList);
      });
    });
    

};

export { productArticle };