import {
  nameValidation,
  emailValidation,
  showMessageRegistration,
  passwordValidation,
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
    nameValidation,
    passwordValidation,
  ];
  const validationErrors = [
    "<p class='text-danger'>Please enter your name.</p>",
    "<p class='text-danger'>Please enter your lastname.</p>",
    "<p class='text-danger'>Please provide valid email.</p>",
    "<p class='text-danger'>Please choose a valid username.</p>",
    "<p class='text-danger'>Please choose a valid password. Password must contain minimum 8 characters, including at least one uppercase letter and one number.</p>",
  ];
  let counter = 0;

  functionValidationArr.forEach((element, index) => {
    if (element(dataArray[index].value) !== null) {
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
    console.log(regData);
    showMessageRegistration();
    return regData;
  }
};

regBtn.addEventListener("click", () => {
  regFormValidation();
});
