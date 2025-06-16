const User = require("./models/User");
const ExpenseService = require("./services/ExpenseService");
const {} = require("./models/Split");

class ExpenseManager {
  constructor() {
    this.users = [];
    this.expenses = [];
    this.balanceSheet = {};
  }

  addUser(id, name, email, phone) {
    const newUser = new User(id, name, email, phone);
    this.users.push(newUser);
  }

  addExpense(expenseType, id, amount, paidBy, splits = []) {
    const expenseService = new ExpenseService();
    const expense = expenseService.createExpense(expenseType, id, amount, paidBy, splits);
    this.expenses.push(expense);

    for (const split of expense.getSplits()) {
      const paidTo = split.getUser();
      if (paidBy === paidTo) {
        continue;
      }

      let payerBalances = this.balanceSheet[paidBy];
      if (!payerBalances) {
        payerBalances = {};
      }
      if (!payerBalances[paidTo]) {
        payerBalances[paidTo] = 0;
      }
      payerBalances[paidTo] += split.getAmount();

      let receiverBalances = this.balanceSheet[paidTo];
      if (!receiverBalances) {
        receiverBalances = {};
      }
      if (!receiverBalances[paidBy]) {
        receiverBalances[paidBy] = 0;
      }
      receiverBalances[paidBy] -= split.getAmount();

      this.balanceSheet[paidBy] = payerBalances;
      this.balanceSheet[paidTo] = receiverBalances;
    }
  }

  getExpenses() {
    return this.expenses;
  }

  getBalanceSheet() {
    return this.balanceSheet;
  }

  showBalances() {
    for (const paidBy of Object.keys(this.balanceSheet)) {
      const userBalance = this.balanceSheet[paidBy];
      for (const user of Object.keys(userBalance)) {
        this.printBalance(paidBy, user, userBalance[user]);
      }
    }
  }

  showBalance(userId) {
    const userBalance = this.balanceSheet[userId];
    for (const user of Object.keys(userBalance)) {
      this.printBalance(userId, user, userBalance[user]);
    }
  }

  printBalance(user1, user2, amount) {
    if (amount > 0) {
      console.log(`${user2} owes ${user1} ${amount}`);
    } else if (amount < 0) {
      console.log(`${user1} owes ${user2} ${Math.abs(amount)}`);
    }
  }
}

module.exports = ExpenseManager;
