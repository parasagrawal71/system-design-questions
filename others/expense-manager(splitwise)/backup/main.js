const User = require("./entities/User");
const BalanceBook = require("./classes/BalanceBook");

class Driver {
  constructor() {
    this.init();
    this.balanceBook = new BalanceBook();
  }

  init() {
    this.users = [
      { id: "u1", name: "Paras", email: "paras@gmail.com", phone: 1234567890, balance: 0 }, // is balance should be different entity
      { id: "u2", name: "Aman", email: "aman@gmail.com", phone: 9087654321, balance: 0 },
      { id: "u3", name: "Amit", email: "amit@gmail.com", phone: 1234560987, balance: 0 },
      { id: "u4", name: "Suraj", email: "suraj@gmail.com", phone: 9087123456, balance: 0 },
    ];
  }

  addExpense(inputType, payer, amountPaid, noOfUsers, users, expenseType, values) {
    // inputType redundant
    // Validation if user not found?
    if (expenseType === "EQUAL") {
      this.balanceBook.addEqualExpense(payer, amountPaid, users);
    }

    return this.balanceBook.getBalanceBook();
  }
}

const driver = new Driver();
driver.addExpense("", "u1", 100, 4, ["u1", "u2", "u3", "u4"], "EQUAL");
const balances = driver.addExpense("", "u1", 200, 4, ["u1", "u2", "u3", "u4"], "EQUAL");
console.log(balances);

// transaction new entity
