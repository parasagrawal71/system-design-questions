import { INotificationAlertObserver } from "../Observer/INotificationAlertObserver";
import { IStocksObservable } from "./IStocksObservable";

export class IphoneObservable implements IStocksObservable {
  observers: INotificationAlertObserver[] = [];
  stockCount: number = 0;

  public add(observer: INotificationAlertObserver): void {
    this.observers.push(observer);
  }

  public remove(observer: INotificationAlertObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  public setStockCount(data: number): void {
    if (this.stockCount === 0) {
      this.notify();
    }
    this.stockCount = data;
  }

  public getStockCount(): number {
    return this.stockCount;
  }
}
