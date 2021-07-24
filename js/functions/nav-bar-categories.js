import { Cart } from "../class/cart.class.js";
const categories_list = document.querySelector("#categories_list");
const user = localStorage.getItem("username");

const allCategories = () => {

  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  let html = "";
  html += `<li class="nav-item py-0 px-4 border-end border-white"><a class="nav-link" href='index.html'>HOME</a></li>`;
  categories.forEach(element => {
    html += `<li class="nav-item py-0 px-4 border-end border-white list" data-category="${element}"><a class="nav-link">${element.toUpperCase()}</a></li>`;
  });

  if(user !== null) {
    html += `<li class="nav-item dropdown py-0 px-4 border-end">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                WELCOME, ${user.toUpperCase()} <i class="fas fa-shopping-cart"></i> <span class="cartNumber">0</span>
                </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="cart.html">Cart <span class="cartNumber">0</span></a></li>
                <li><a class="dropdown-item" href="#">Account</a></li>
                <li><hr class="dropdown-divider"></li>
                <li id='logout'><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
          </li>`;
  } else {
    html += `<li class="nav-item py-0 px-4 border-end border-white"><a class="nav-link" href='login.html'>LOG IN</a></li>
            <li class="nav-item py-0 px-4"><a class="nav-link" href='register.html'>REGISTER</a></li>`;
  }
  
  categories_list.innerHTML = html;

  const cartNumber = document.querySelectorAll(".cartNumber");
  const cart = new Cart();

  if(localStorage.getItem("shopCart") !== null) {
    const shopCart = JSON.parse(localStorage.getItem("shopCart"));
    shopCart.forEach(element => cart.addToCart(element));
    cartNumber.forEach(element => element.textContent = cart.cartList.length);
  } else {
    cartNumber.forEach(element => element.textContent = "0");
  }

  let list = document.querySelectorAll(".list");
  list.forEach(element => {
    element.addEventListener("click", () => {
      let atr = element.getAttribute("data-category");
      localStorage.setItem("category", atr);
      window.location.assign("categories.html");
    });
  });

  if(user !== null) {
    const logout = document.querySelector("#logout");
    logout.addEventListener("click", () => {
      localStorage.clear();
      window.location.assign("index.html");
    });
  } 

};

allCategories();
