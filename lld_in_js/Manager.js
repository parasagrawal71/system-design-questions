const UserService = require("./services/UserService");

class Manager {
  constructor() {
    this.userService = new UserService();
  }

  addUser(name, email) {
    const user = this.userService.createUser(name, email);
    console.log(`User: ${user.getName()} ${user.getEmail()}`);
  }

  printUserList() {
    const users = this.userService.getUsers();
    for (const user of users) {
      console.log(`User: ${user.getName()} ${user.getEmail()}`);
    }
  }
}

module.exports = Manager;
