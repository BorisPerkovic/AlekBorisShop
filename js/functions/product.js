const product_img = document.querySelector("#product_img");
const product_info = document.querySelector("#product_info");
const product_description = document.querySelector("#product_description");
const spinner = document.querySelector("#spinner");
const footer = document.querySelector("#footer");


const product = (data) => {

    product_img.innerHTML = `<img src='${data.image}' class='img-fluid' alt='product'>`;

    product_info.innerHTML = `<p>Category: ${data.category}</p>
                              <h4>Price: ${data.price} USD</h4>
                              <h5>Title: ${data.title}</h5>
                              <p class='lead'>Description: ${data.description}</p>
                              <p class='text-center my-2 py-1 bg-success text-white rounded shoppingCart'>add to <i class="fas fa-shopping-cart"></i></p>`;

    spinner.remove();
    footer.classList.remove("hide");

}
export { product };