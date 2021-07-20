const articleDiv = document.querySelector("#form");
const mainSection = document.querySelector("main");

/* validating name and lastname function */
const nameValidation = (name) => {
  if (
    name !== "" &&
    name.split("").every((element) => element !== parseInt(element))
  ) {
    return name;
  } else {
    return null;
  }
};

/* validating password function */
const passwordValidation = (password) => {
  let counter = 0;
  if (
    password
      .split("")
      .filter((element) => isNaN(parseInt(element)))
      .some((element) => element === element.toUpperCase())
  ) {
    counter++;
  }
  if (password.length >= 8) {
    counter++;
  }
  if (password.split("").some((element) => element == parseInt(element))) {
    counter++;
  }

  //final check validation
  if (counter === 3) {
    return password;
  } else {
    return null;
  }
};

/* validating email function */
const emailValidation = (email) => {
  if (
    email.split("").filter((element) => element === "@").length === 1 &&
    email
      .split("@")
      .filter((element) => element !== "@")
      .filter((element) => element.length >= 3).length === 2 &&
    email.split(".").pop().length >= 2
  ) {
    return email;
  } else {
    return null;
  }
};

/* Success message function */
const showMessageRegistration = () => {
  articleDiv.classList.add("hide");
  const successDiv = document.createElement("div");
  successDiv.classList.add("col-md-6", "mx-auto", "fs-4", "text-center");
  successDiv.innerHTML = `Registration complete! ${regName.value}, your account has been created!
  Please log in.`;
  mainSection.appendChild(successDiv);
};

export {
  nameValidation,
  emailValidation,
  passwordValidation,
  showMessageRegistration,
};
