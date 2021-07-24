import { User } from "../class/users.class.js";
import { AllUsers } from "../class/allUsers.class.js";
import { fetchUsersJson  } from "./endpoints.js";


const articleDiv = document.querySelector("#form");
const mainSection = document.querySelector("main");


const regName = document.querySelector("#regName");
const regLastname = document.querySelector("#regLastname");
const regUsername = document.querySelector("#regUsername");
const regEmail = document.querySelector("#regEmail");
const regPassword = document.querySelector("#regPassword");
const regBtn = document.querySelector("#regBtn");
const validDiv = document.querySelectorAll(".validation");

/* FORM VALIDATION */
const regFormValidation = () => {

  const allUsers = new AllUsers();

  fetchUsersJson()
    .then(data => {
      const json = data;

      json.forEach(element => {
        let usersJson = new User(element.name, element.lastname, element.email, element.username, element.password);
        allUsers.addUser(usersJson);
      });

      regBtn.addEventListener("click", () => {

        let counter = 0;


        if(allUsers.nameValidation(regName.value)) {
          counter++;
          validDiv[0].classList.remove("hide");
          validDiv[0].innerHTML = "<p class='text-success'>Looks good!</p>";
          regName.classList.add("border-2", "border-success");
          regName.classList.remove("border-danger");
        } else {
          validDiv[0].classList.remove("hide");
          validDiv[0].innerHTML = "<p class='text-danger'>Please enter valid name.</p>";
          regName.classList.add("border-2", "border-danger");
          regName.classList.remove("border-success")
        }

        if(allUsers.lastnameValidation(regLastname.value)) {
          counter++;
          validDiv[1].classList.remove("hide");
          validDiv[1].innerHTML = "<p class='text-success'>Looks good!</p>";
          regLastname.classList.add("border-2", "border-success");
          regLastname.classList.remove("border-danger");
        } else {
          validDiv[1].classList.remove("hide");
          validDiv[1].innerHTML = "<p class='text-danger'>Please enter valid lastname.</p>";
          regLastname.classList.add("border-2", "border-danger");
          regLastname.classList.remove("border-success");
        }

        if(!allUsers.checkEmail(regEmail.value)) {
          validDiv[2].classList.remove("hide");
          validDiv[2].innerHTML = "<p class='text-danger'>Please provide valid email.</p>";
          regEmail.classList.add("border-2", "border-danger");
          regEmail.classList.remove("border-success");
        } else if(!allUsers.checkEmailExists( regEmail.value, json )) {
          validDiv[2].classList.remove("hide");
          validDiv[2].innerHTML = "<p class='text-danger'>Please provide valid email. E-mail maybe already exists!</p>";
          regEmail.classList.add("border-2", "border-danger");
          regEmail.classList.remove("border-success");
        } else {
          counter++;
          validDiv[2].classList.remove("hide");
          validDiv[2].innerHTML = "<p class='text-success'>Looks good!</p>";
          regEmail.classList.add("border-2", "border-success");
          regEmail.classList.remove("border-danger");
        }

        if(regUsername.value == "") {
          validDiv[3].classList.remove("hide");
          validDiv[3].innerHTML = "<p class='text-danger'>Please provide valid username.</p>";
          regUsername.classList.add("border-2", "border-danger");
          regUsername.classList.remove("border-success");
        } else if(!allUsers.checkUsernameExists( regUsername.value, json )) {
          validDiv[3].classList.remove("hide");
          validDiv[3].innerHTML = "<p class='text-danger'>Please provide valid username. Username maybe already exists!</p>";
          regUsername.classList.add("border-2", "border-danger");
          regUsername.classList.remove("border-success");
        } else {
          counter++;
          validDiv[3].classList.remove("hide");
          validDiv[3].innerHTML = "<p class='text-success'>Looks good!</p>";
          regUsername.classList.add("border-2", "border-success");
          regUsername.classList.remove("border-danger");
        }

        if(regPassword.value == "") {
          validDiv[4].classList.remove("hide");
          validDiv[4].innerHTML = "<p class='text-danger'>Please provide valid password.</p>";
          regPassword.classList.add("border-2", "border-danger");
          regPassword.classList.remove("border-success");
        } else if(regPassword.value.length < 8) {
          validDiv[4].classList.remove("hide");
          validDiv[4].innerHTML = "<p class='text-danger'>Password must contain minimum 8 charachters</p>";
          regPassword.classList.add("border-2", "border-danger");
          regPassword.classList.remove("border-danger");
        } else if (!allUsers.checkPasswordUpperCase(regPassword.value)) {
          validDiv[4].classList.remove("hide");
          validDiv[4].innerHTML = "<p class='text-danger'>Password must contain at least one uppercase letter.</p>";
          regPassword.classList.add("border-2", "border-danger");
          regPassword.classList.remove("border-succes");
        } else if (!allUsers.checkPasswordNumber(regPassword.value)) {
          validDiv[4].classList.remove("hide");
          validDiv[4].innerHTML = "<p class='text-danger'>Password must contain at least one number.</p>";
          regPassword.classList.add("border-2", "border-danger");
          regPassword.classList.remove("border-succes");
        } else {
          counter++;
          validDiv[4].classList.remove("hide");
          validDiv[4].innerHTML = "<p class='text-success'>Looks good!</p>";
          regPassword.classList.add("border-2", "border-success");
          regPassword.classList.remove("border-danger");
        }

        //final validation and registration
        if (counter === 5) {
          const userObj = new User(regName.value, regLastname.value, regEmail.value, regUsername.value, regPassword.value);
          articleDiv.classList.add("hide");
          const successDiv = document.createElement("div");
          successDiv.classList.add("col-md-6", "mx-auto", "fs-4", "text-center");
          successDiv.innerHTML = `Registration complete! ${userObj.name}, your account has been created! Please log in.`;
          mainSection.appendChild(successDiv); 
          let regObj = JSON.stringify(userObj);
          localStorage.setItem("user", regObj);
        }
      });
    });
};


export { regFormValidation };
