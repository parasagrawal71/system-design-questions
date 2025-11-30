export class Funds {
  constructor() {}

  hasSufficientFunds(accNo: string, amount: number): boolean {
    console.log("Sufficient funds available");
    return true;
  }

  debit(accNo: string, amount: number): void {
    console.log("Funds Debited: " + accNo);
  }
}
