import { nameValidation, emailValidation, showMessageRegistration, passwordValidation,} from "./functions/register_validation.js";

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
  let counter = 0;
  if (nameValidation(regData.name) !== null) {
    validDiv[0].classList.remove("hide");
    validDiv[0].innerHTML = "<p class='text-success'>Looks good!</p>";
    regName.classList.add("border-2", "border-success");
    regName.classList.remove("border-danger");
  } else {
    counter++;
    validDiv[0].classList.remove("hide");
    validDiv[0].innerHTML =
      "<p class='text-danger'>Please enter your name.</p>";
    regName.classList.add("border-2", "border-danger");
    regName.classList.remove("border-success");
  }
  if (nameValidation(regData.lastname) !== null) {
    validDiv[1].classList.remove("hide");
    validDiv[1].innerHTML = "<p class='text-success'>Looks good!</p>";
    regLastname.classList.add("border-2", "border-success");
    regLastname.classList.remove("border-danger");
  } else {
    counter++;
    validDiv[1].classList.remove("hide");
    validDiv[1].innerHTML =
      "<p class='text-danger'>Please enter your lastname.</p>";
    regLastname.classList.add("border-2", "border-danger");
    regLastname.classList.remove("border-success");
  }
  if (emailValidation(regData.email) !== null) {
    validDiv[2].classList.remove("hide");
    validDiv[2].innerHTML = "<p class='text-success'>Looks good!</p>";
    regEmail.classList.add("border-2", "border-success");
    regEmail.classList.remove("border-danger");
  } else {
    counter++;
    validDiv[2].classList.remove("hide");
    validDiv[2].innerHTML =
      "<p class='text-danger'>Please provide valid email.</p>";
    regEmail.classList.add("border-2", "border-danger");
    regEmail.classList.remove("border-success");
  }
  if (nameValidation(regData.username) !== null) {
    validDiv[3].classList.remove("hide");
    validDiv[3].innerHTML = "<p class='text-success'>Looks good!</p>";
    regUsername.classList.add("border-2", "border-success");
    regUsername.classList.remove("border-danger");
  } else {
    counter++;
    validDiv[3].classList.remove("hide");
    validDiv[3].innerHTML =
      "<p class='text-danger'>Please choose a valid username.</p>";
    regUsername.classList.add("border-2", "border-danger");
    regUsername.classList.remove("border-success");
  }
  if (passwordValidation(regData.password) !== null) {
    validDiv[4].classList.remove("hide");
    validDiv[4].innerHTML = "<p class='text-success'>Looks good!</p>";
    regPassword.classList.add("border-2", "border-success");
    regPassword.classList.remove("border-danger");
  } else {
    counter++;
    validDiv[4].classList.remove("hide");
    validDiv[4].innerHTML =
      "<p class='text-danger'>Please choose a valid password. Password must contain minimum 8 characters, including at least one uppercase letter and one number.</p>";
    regPassword.classList.add("border-2", "border-danger");
    regPassword.classList.remove("border-success");
  }
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
