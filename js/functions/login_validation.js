import { User } from "../class/users.class.js";
import { AllUsers } from "../class/allUsers.class.js";
import { fetchUsersJson  } from "./endpoints.js";

const allUsers = new AllUsers();

if(localStorage.getItem("user") !== null) {
  const objectLocalStorage = JSON.parse(localStorage.getItem("user"));
  const user = new User(objectLocalStorage.name, objectLocalStorage.lastname, objectLocalStorage.email, objectLocalStorage.username, objectLocalStorage.password);
  allUsers.addUser(user);
}


fetchUsersJson()
 .then(data => {
   const json = data;

   json.forEach(element => {
     let userObj = new User(element.name, element.lastname, element.email, element.username, element.password);
     allUsers.addUser(userObj);
   });

   console.log(allUsers.userList);
 });

const loginValidation = () => {

  

}

