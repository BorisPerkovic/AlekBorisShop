/*================================================== 
 -function for log in user 
 -action is starting on click log in button
 -every user from users.json file and users from registration can be loged in
===================================================*/

/* html handlers */
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const divError = document.querySelector("#validation");

/* function for validation log in form  */
const logInValidation = (data) => {

  /* check if input fields are empty strings, if it is display error message */
  if(!username.value || !password.value) {
    divError.innerHTML = "<p>All fields are required.</p>";
    return false; 
  }

  for(let i = 0; i < data.length; i++) {

    /* check if username and password are wrong, if it is display error message */
    if(data[i].username === username.value && data[i].password === password.value) {  

      /* creating username for log in and user object in local storage */
      localStorage.setItem("username", username.value);
      localStorage.setItem("user", JSON.stringify(data[i]));
      divError.innerHTML = "";
      window.location.assign("index.html");
      break;
    } else {
      divError.innerHTML = "<p>Wrong username or password</p>";
    }
  }
};

/* export logInValidation function */
export {logInValidation};


