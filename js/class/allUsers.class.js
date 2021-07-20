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
};

export { AllUsers };