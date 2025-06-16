class BalanceBook {
  constructor() {
    this.balances = {};
  }

  getBalanceBook() {
    return this.balances;
  }

  addEqualExpense(payer, amountPaid = 0, sharers = []) {
    const equalShare = amountPaid / sharers.length;
    if (!this.balances[payer]) {
      this.balances[payer] = {};
    }
    let payerBalance = this.balances[payer];
    sharers.map((uId) => {
      if (uId !== payer) {
        payerBalance[uId] = payerBalance[uId] ? payerBalance[uId] + equalShare : equalShare;
      }
    });
    this.balances[payer] = payerBalance;
  }

  validateExactSharesAmount(totalAmount, shares) {
    const total = shares.reduce((acc, share) => acc + share, 0);
    return total === totalAmount;
  }

  addExactExpense(payer, amountPaid = 0, sharers = [], shares = []) {
    if (!this.validateExactSharesAmount(amountPaid, shares)) {
      throw new Error("Sum of shares is NOT equal to total amount paid");
      // TODO: This validation should be while taking input
    }

    const sharesMap = {};
    sharers.map((uId, index) => (sharesMap[uId] = shares[index]));

    if (!this.balances[payer]) {
      this.balances[payer] = {};
    }
    let payerBalance = this.balances[payer];
    sharers.map((uId) => {
      if (uId !== payer) {
        payerBalance[uId] = payerBalance[uId] ? payerBalance[uId] + sharesMap[uId] : sharesMap[uId];
      }
    });
    this.balances[payer] = payerBalance;
  }

  addPercentExpense(payer, amountPaid = 0, sharers = [], sharesPer = []) {
    // TODO: Validation

    const sharesMap = {};
    sharers.map((uId, index) => {
      const amount = Number(((shares[index] * amountPaid) / 100).toFixed(2));
      sharesMap[uId] = amount;
    });

    if (!this.balances[payer]) {
      this.balances[payer] = {};
    }
    let payerBalance = this.balances[payer];
    sharers.map((uId) => {
      if (uId !== payer) {
        payerBalance[uId] = payerBalance[uId] ? payerBalance[uId] + sharesMap[uId] : sharesMap[uId];
      }
    });
    this.balances[payer] = payerBalance;
  }
}

module.exports = BalanceBook;
