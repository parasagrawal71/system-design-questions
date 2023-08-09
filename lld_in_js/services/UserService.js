const User = require("../models/User");
const uuid = require("uuid");

class UserService {
  users;

  constructor() {
    this.users = {};
  }

  createUser(name, email) {
    const userId = uuid.v4();
    const user = new User(userId, name, email);
    this.users[userId] = user;
    return user;
  }

  getUsers() {
    return Object.values(this.users);
  }
}

module.exports = UserService;
