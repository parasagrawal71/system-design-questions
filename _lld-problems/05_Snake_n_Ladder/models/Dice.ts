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

    // When a player rolls 6, they gets more chance (For diceCount = 1)
    if (this._diceCount === 1) {
      let sixCount = 1;
      while (totalSum % 6 === 0 && sixCount < 3) {
        totalSum += Math.floor(Math.random() * this.max) + this.min;
        sixCount++;
      }
      // but when the player rolls six 3 times, they gets no more chance
      if (sixCount === 3) {
        console.log(`Player rolled six 3 times, no more chance`);
        return 0;
      }
    }

    return totalSum;
  }
}
