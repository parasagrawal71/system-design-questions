export class Dice {
  private _diceCount: number = 0;
  private min = 1;
  private max = 6;

  constructor(diceCount: number) {
    this._diceCount = diceCount;
  }

  rollDice(): number {
    let totalSum = 0;
    let diceUsed = 0;

    while (diceUsed < this._diceCount) {
      totalSum += Math.floor(Math.random() * this.max) + this.min;
      diceUsed++;
    }

    return totalSum;
  }
}
