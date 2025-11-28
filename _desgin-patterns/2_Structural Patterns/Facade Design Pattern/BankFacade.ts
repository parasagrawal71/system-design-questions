import { Account } from "./Account";
import { Funds } from "./Funds";
import { Notification } from "./Notification";
import { Security } from "./Security";

export class BankFacade {
  private security: Security;
  private account: Account;
  private funds: Funds;
  private notification: Notification;

  constructor() {
    this.security = new Security();
    this.account = new Account();
    this.funds = new Funds();
    this.notification = new Notification();
  }

  withdraw(accNo: string, amount: number, pin: string): void {
    console.log("Starting Withdrawal Process...");
    if (
      this.account.verifyAccount(accNo) &&
      this.security.verifyPin(pin) &&
      this.funds.hasSufficientFunds(accNo, amount)
    ) {
      this.funds.debit(accNo, amount);
      this.notification.sendNotification("Withdrawal successful");
    } else {
      this.notification.sendNotification("Withdrawal failed");
    }
  }
}