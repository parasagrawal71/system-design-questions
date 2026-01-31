export class Account {
  private accNo: string;

  private balance: number;

  constructor(accNo: string, balance: number) {
    this.accNo = accNo;
    this.balance = balance;
  }

  // getters
  getAccNo(): string {
    return this.accNo;
  }

  getBalance(): number {
    return this.balance;
  }

  // setters
  setBalance(balance: number): void {
    this.balance = balance;
  }
}
