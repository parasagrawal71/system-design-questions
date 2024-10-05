import { IStocksObservable } from "../Observable/IStocksObservable";
import { INotificationAlertObserver } from "./INotificationAlertObserver";

export class EmailAlertObserver implements INotificationAlertObserver {
  email: string;
  observable: IStocksObservable;

  constructor(email: string, observable: IStocksObservable) {
    this.observable = observable;
    this.email = email;
  }

  public update(): void {
    this.sendEmail(this.email, `Product is in stock hurry up!`);
  }

  private sendEmail(email: string, msg: string): void {
    console.log(`Email sent to ${email}: ${msg}`);
  }
}
