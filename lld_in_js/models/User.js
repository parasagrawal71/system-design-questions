class User {
  #_id = "";
  _name = "";
  _email = "";

  constructor(id, name, email) {
    this.#_id = id;
    this._name = name;
    this._email = email;
  }

  getId() {
    this.#_id;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getEmail() {
    return this._email;
  }

  setEmail(email) {
    this._email = email;
  }
}

module.exports = User;
