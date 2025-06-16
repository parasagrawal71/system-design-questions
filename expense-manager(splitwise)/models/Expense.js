class Expense {
  constructor(id, amount, paidBy, splits = []) {
    this.id = id;
    this.amount = Number(amount);
    this.paidBy = paidBy;
    this.splits = splits;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = Number(amount);
  }

  getPaidBy() {
    return this.paidBy;
  }

  setPaidBy(paidBy) {
    this.paidBy = paidBy;
  }

  getSplits() {
    return this.splits;
  }

  setSplits(splits) {
    this.splits = splits;
  }
}

class EqualExpense extends Expense {
  constructor(id, amount, paidBy, splits = []) {
    super(id, amount, paidBy, splits);
  }
}

class ExactExpense extends Expense {
  constructor(id, amount, paidBy, splits = []) {
    super(id, amount, paidBy, splits);
  }

  validate() {
    let totalSplit = 0;
    for (const split of this.getSplits()) {
      totalSplit += split.getAmount();
    }

    return totalSplit === this.getAmount();
  }
}

class PercentExpense extends Expense {
  constructor(id, amount, paidBy, splits = []) {
    super(id, amount, paidBy, splits);
  }

  validate() {
    let totalSplitPercent = 0;
    for (const splitPercent of this.getSplits()) {
      totalSplitPercent += splitPercent.getPercent();
    }

    return totalSplitPercent === 100;
  }
}

module.exports = { Expense, EqualExpense, ExactExpense, PercentExpense };
