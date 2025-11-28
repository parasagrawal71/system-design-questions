import { IStocksObservable } from "../Observable/IStocksObservable";
import { INotificationAlertObserver } from "./INotificationAlertObserver";

export class MobileAlertObserver implements INotificationAlertObserver {
  phone: string;
  observable: IStocksObservable;

  constructor(phone: string, observable: IStocksObservable) {
    this.observable = observable;
    this.phone = phone;
  }

  public update(): void {
    this.sendSms(this.phone, `Product is in stock hurry up!`);
  }

  private sendSms(phone: string, msg: string): void {
    console.log(`SMS sent to ${phone}: ${msg}`);
  }
}
