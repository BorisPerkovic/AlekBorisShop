
const user = JSON.parse(localStorage.getItem("user"));
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const changeDataBtn = document.querySelector("#changeDatabtn");
const saveDataBtn = document.querySelector("#saveDatabtn");
const inputs = document.querySelectorAll(".inputs");

const changeData = () => {

  name.value = user.name;
  lastname.value = user.lastname;
  email.value = user.email;
  username.value = user.username;
  password.value = user.password;

  changeDataBtn.addEventListener("click", () => {
    inputs.forEach(element => element.removeAttribute("disabled"));
    changeDataBtn.classList.add("hide");
    saveDataBtn.classList.remove("hide");
  });

  saveDataBtn.addEventListener("click", () => {
    if(confirm("You are about to change account details! Are you sure?")) {
      
      let changeUser = {
          name : name.value,
          lastname: lastname.value,
          email: email.value,
          username: username.value,
          password: password.value
        };

        localStorage.setItem("username", changeUser.username);
        changeUser = JSON.stringify(changeUser);
        localStorage.setItem("user", changeUser);
        window.location.reload();
    }
  });

}

export { changeData };