class Split {
  constructor(user, amount = 0) {
    this.user = user;
    this.amount = Number(amount);
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = Number(amount);
  }
}

class EqualSplit extends Split {
  constructor(id, amount) {
    super(id, amount);
  }
}

class ExactSplit extends Split {
  constructor(id, amount) {
    super(id, amount);
  }
}

class PercentSplit extends Split {
  constructor(id, percent) {
    super(id);
    this.percent = Number(percent);
  }

  getPercent() {
    return this.percent;
  }

  setPercent(percent) {
    this.percent = Number(percent);
  }
}

module.exports = { Split, EqualSplit, ExactSplit, PercentSplit };
