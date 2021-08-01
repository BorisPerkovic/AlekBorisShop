/*================================================== 
 User class
 -creating instances of users from users.json fajl and for new register user before create AllUsers list
===================================================*/

class User {
  constructor(name, lastname, email, username, password) {
    this.name = name,
    this.lastname = lastname,
    this.email = email,
    this.username = username,
    this.password = password
  }
}

/* export user class */
export { User };