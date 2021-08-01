/*================================================== 
 All User class
 -creating list of all users from users.json file and for new register user
 -having methods for register form validation 
===================================================*/

/* import user class for creating instaces of users for creating user list */
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

  /* name validation method */
  nameValidation(name){
    if (name !== "" && name.split("").every((element) => parseInt(element) !== parseInt(element))) {
      return true;
    } else {
      return false;
    }
  };

  /* lastname validation method */
  lastnameValidation(lastname){
    if (lastname !== "" && lastname.split("").every((element) => parseInt(element) !== parseInt(element))) {
      return true;
    } else {
      return false;
    }
  };

  /* password uppercase validation method */
  checkPasswordUpperCase (pass) {
    return pass
      .split("")
      .filter((element) => isNaN(parseInt(element)))
      .some((element) => element === element.toUpperCase());
  };

  /* password number validation method */
  checkPasswordNumber (pass) {
    return pass
      .split("")
      .some((element) => parseInt(element) === parseInt(element));
  };

  /* email validation method */
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

  /* email exists validation method */
  checkEmailExists (email, array) {

    for(let i = 0; i < array.length; i++) {
      if (array[i].email == email) {
        return false;
      }
    }

    return true;
  };

  /* username validation method */
  checkUsernameExists (username, array) {

    for(let i = 0; i < array.length; i++) {
      if (array[i].username == username) {
        return false;
      }
    }

    return true;
  };
};

/* export all users class */
export { AllUsers };