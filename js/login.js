import {logInValidation} from "./functions/login_validation.js";
import { User } from "./class/users.class.js";
import { AllUsers } from "./class/allUsers.class.js";
import { fetchUsersJson  } from "./functions/endpoints.js";

const divError = document.querySelector("#validation");

const allUsers = new AllUsers();

if(localStorage.getItem("user") !== null) {
  const objectLocalStorage = JSON.parse(localStorage.getItem("user"));
  const user = new User(objectLocalStorage.name, objectLocalStorage.lastname, objectLocalStorage.email, objectLocalStorage.username, objectLocalStorage.password);
  allUsers.addUser(user);
}

const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", () => {
    fetchUsersJson()
  .then(data => {
    const json = data;

    json.forEach(element => {
      let userObj = new User(element.name, element.lastname, element.email, element.username, element.password);
      allUsers.addUser(userObj);
    });

    return allUsers;
  }).then(data => {
    
    logInValidation(data.userList);
  });
  
});