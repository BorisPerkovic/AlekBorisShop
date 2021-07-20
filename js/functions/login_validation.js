
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const divError = document.querySelector("#validation");

const logInValidation = (data) => {

  if(!username.value || !password.value) {
    divError.innerHTML = "<p>All fields are required.</p>";
    return false; 
  }

  for(let i = 0; i < data.length; i++) {

    if(data[i].username === username.value && data[i].password === password.value) {  

      localStorage.setItem("username", username.value);
      window.location.assign("index.html");
      break;
    } else {
      divError.innerHTML = "<p>Wrong username or password</p>";
    }
  }
};

export {logInValidation};


