class User {
  constructor(name) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.balance = 0;
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      balance: this.balance,
    };
  }

  updateBalance(difference) {
    // difference: positive or negative value depending on user gets it or gives it
    this.balance = this.balance + difference;
    return this.balance;
  }
}

module.exports = User;
