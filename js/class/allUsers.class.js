import { User } from "./users.class.js";

class AllUsers {
  constructor() {
    this.userList = [];
  }

  addUser (user) {
    if(user instanceof User) {
      this.userList.push(user)
    }
  };

  nameValidation(name){
    if (name !== "" && name.split("").every((element) => parseInt(element) !== parseInt(element))) {
      return true;
    } else {
      return false;
    }
  };

  lastnameValidation(lastname){
    if (lastname !== "" && lastname.split("").every((element) => parseInt(element) !== parseInt(element))) {
      return true;
    } else {
      return false;
    }
  };

  checkPasswordUpperCase (pass) {
    return pass
      .split("")
      .filter((element) => isNaN(parseInt(element)))
      .some((element) => element === element.toUpperCase());
  };

  checkPasswordNumber (pass) {
    return pass
      .split("")
      .some((element) => parseInt(element) === parseInt(element));
  };

  checkEmail (email) {
    if (
      email !== "" && email.split("").filter((element) => element === "@").length === 1 &&
      email
        .split("@")
        .filter((element) => element !== "@")
        .filter((element) => element.length >= 3).length === 2 &&
      email.split(".").pop().length >= 2
    ) {
      return true;
    } 

    return false;
  };

  checkEmailExists (email, array) {

    for(let i = 0; i < array.length; i++) {
      if (array[i].email == email) {
        return false;
      }
    }

    return true;
  };

  checkUsernameExists (username, array) {

    for(let i = 0; i < array.length; i++) {
      if (array[i].username == username) {
        return false;
      }
    }

    return true;
  };
};

export { AllUsers };