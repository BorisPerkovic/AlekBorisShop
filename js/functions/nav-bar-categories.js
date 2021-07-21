const categories_list = document.querySelector("#categories_list");
const user = localStorage.getItem("username");

const allCategories = () => {

  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  let html = "";
  html += `<li class="nav-item py-0 px-5 border-end border-white lh-lg"><a href='index.html'>HOME</a></li>`;
  categories.forEach(element => {
    html += `<li class="nav-item py-0 px-5 border-end border-white lh-lg list" data-category="${element}">${element.toUpperCase()}</li>`;
  });

  if(user !== null) {
    html += `<li class="nav-item dropdown py-0 px-5 border-end lh-lg">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Welcome, ${user} <i class="fas fa-shopping-cart"></i> <span class="cartNumber">0</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="cart.html">Cart <span class="cartNumber">0</span></a></li>
              <li><a class="dropdown-item" href="#">Account</a></li>
              <li><hr class="dropdown-divider"></li>
              <li id='logout'><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>`;
  } else {
    html += `<li class="nav-item py-0 px-5 border-end border-white lh-lg"><a href='login.html'>LOG IN</a></li>
            <li class="nav-item py-0 px-5 lh-lg"><a href='register.html'>REGISTER</a></li>`;
  }
  
  categories_list.innerHTML = html;

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
      window.location.reload();
    });
  } 

};

allCategories();
