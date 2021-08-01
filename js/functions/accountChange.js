/*================================================== 
 -function for changing users account data
 -allow users to change personal data after registration
===================================================*/

/* geting data from local storage for user who is loged in  */
const user = JSON.parse(localStorage.getItem("user"));

/* html handlers  */
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const changeDataBtn = document.querySelector("#changeDatabtn");
const saveDataBtn = document.querySelector("#saveDatabtn");
const cancelDatabtn = document.querySelector("#cancelDatabtn");
const inputs = document.querySelectorAll(".inputs");

/* change data function */
const changeData = () => {

  name.value = user.name;
  lastname.value = user.lastname;
  email.value = user.email;
  username.value = user.username;
  password.value = user.password;

  /* on click change data button, removes disable attribute from input fields and allows users to change data */
  changeDataBtn.addEventListener("click", () => {
    inputs.forEach(element => element.removeAttribute("disabled"));
    changeDataBtn.classList.add("hide");
    saveDataBtn.classList.remove("hide");
    cancelDatabtn.classList.remove("hide");
  });

  /* on click save data button, saving users data from input fields and creating user item in local storage */
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

  /* on click cancel data button, reload page without saving any changes */
  cancelDatabtn.addEventListener("click", () => {
    
    if(confirm("You are about to cancel without saving! Are you sure?")) {
      window.location.reload(); 
    }

  });

}

/* export change data function */
export { changeData };