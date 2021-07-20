import { User } from "./class/users.class.js";
import { AllUsers } from "./class/allUsers.class.js";
import { fetchUsersJson  } from "./functions/endpoints.js";

import {
  nameValidation,
  emailValidation,
  showMessageRegistration,
  passwordValidation,
  usernameValidation
} from "./functions/register_validation.js";


const regName = document.querySelector("#regName");
const regLastname = document.querySelector("#regLastname");
const regUsername = document.querySelector("#regUsername");
const regEmail = document.querySelector("#regEmail");
const regPassword = document.querySelector("#regPassword");
const regBtn = document.querySelector("#regBtn");
const validDiv = document.querySelectorAll(".validation");

/*
 FORM VALIDATION
 */
const regFormValidation = () => {

  const allUsers = new AllUsers();

  fetchUsersJson()
    .then(data => {
      const json = data;

      json.forEach(element => {
        let userObj = new User(element.name, element.lastname, element.email, element.username, element.password);
        allUsers.addUser(userObj);
      });

      const regData = {
        name: regName.value,
        lastname: regLastname.value,
        email: regEmail.value,
        username: regUsername.value,
        password: regPassword.value,
      };
      const dataArray = [regName, regLastname, regEmail, regUsername, regPassword];
      const functionValidationArr = [
        nameValidation,
        nameValidation,
        emailValidation,
        usernameValidation,
        passwordValidation,
      ];
      const validationErrors = [
        "<p class='text-danger'>Please enter your name.</p>",
        "<p class='text-danger'>Please enter your lastname.</p>",
        "<p class='text-danger'>Please provide valid email. E-mail maybe already exists</p>",
        "<p class='text-danger'>Please choose a valid username. Username maybe already exists</p>",
        "<p class='text-danger'>Please choose a valid password. Password must contain minimum 8 characters, including at least one uppercase letter and one number.</p>",
      ];
      let counter = 0;

      functionValidationArr.forEach((element, index) => {
        if (element(dataArray[index].value, allUsers.userList) !== null) {
          validDiv[index].classList.remove("hide");
          validDiv[index].innerHTML = "<p class='text-success'>Looks good!</p>";
          dataArray[index].classList.add("border-2", "border-success");
          dataArray[index].classList.remove("border-danger");
        } else {
          counter++;
          validDiv[index].classList.remove("hide");
          validDiv[index].innerHTML = validationErrors[index];
          dataArray[index].classList.add("border-2", "border-danger");
          dataArray[index].classList.remove("border-success");
        }
      });

      //final validation and registration
      if (counter === 0) {
        showMessageRegistration();
        let regObj = JSON.stringify(regData);
        localStorage.setItem("user", regObj);
        return regData;
      }
    });


};

regBtn.addEventListener("click", () => {
  regFormValidation();
});