const categories_list = document.querySelector("#categories_list");

const allCategories = () => {

  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
  let html = "";
  html += `<li class="nav-item py-0 px-5 border-end border-white lh-lg"><a href='index.html'>HOME</a></li>`;
  categories.forEach(element => {
    html += `<li class="nav-item py-0 px-5 border-end border-white lh-lg list" data-category="${element}">${element.toUpperCase()}`;
  });
  html += `<li class="nav-item py-0 px-5 border-end border-white lh-lg"><a href='login.html'>LOG IN</a></li>
          <li class="nav-item py-0 px-5 lh-lg"><a href='register.html'>REGISTER</a></li>`;
  categories_list.innerHTML = html;

  let list = document.querySelectorAll(".list");
  list.forEach(element => {
    element.addEventListener("click", () => {
      let atr = element.getAttribute("data-category");
      localStorage.setItem("category", atr);
      window.location.assign("categories.html");
    });

  });

};
allCategories();