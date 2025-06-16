const { EqualExpense, ExactExpense, PercentExpense } = require("../models/Expense");
const ExpenseType = require("../models/ExpenseType");

class ExpenseService {
  constructor() {}

  createExpense(expenseType, id, amount, paidBy, splits = []) {
    let expense = null;
    switch (expenseType) {
      case ExpenseType.EQUAL:
        console.log(`createExpense: EQUAL called`);
        const equalAmount = amount / splits.length;
        for (const split of splits) {
          split.setAmount(equalAmount);
        }
        return new EqualExpense(id, amount, paidBy, splits);

      case ExpenseType.EXACT:
        console.log(`createExpense: EXACT called`);
        expense = new ExactExpense(id, amount, paidBy, splits);
        if (!expense.validate()) {
          throw new Error("EXACT: Validation error");
        }
        return expense;

      case ExpenseType.PERCENT:
        console.log(`createExpense: PERCENT called`);
        for (const split of splits) {
          split.setAmount(Number(((split.getPercent() * amount) / 100).toFixed(2)));
        }
        expense = new PercentExpense(id, amount, paidBy, splits);
        if (!expense.validate()) {
          throw new Error("PERCENT: Validation error");
        }
        return expense;
    }
  }
}

module.exports = ExpenseService;
