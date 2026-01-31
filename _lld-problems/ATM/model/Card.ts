import { Account } from "./Account";

export class Card {
  cardNumber: string;
  pin: string;
  account: Account;

  constructor(cardNumber: string, pin: string, account: Account) {
    this.cardNumber = cardNumber;
    this.pin = pin;
    this.account = account;
  }

  // getters
  getPin(): string {
    return this.pin;
  }

  getAccount(): Account {
    return this.account;
  }
}
