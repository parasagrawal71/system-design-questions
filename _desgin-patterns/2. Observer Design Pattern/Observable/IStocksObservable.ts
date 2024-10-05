import { INotificationAlertObserver } from "../Observer/INotificationAlertObserver";

export interface IStocksObservable {
  add(observer: INotificationAlertObserver): void;
  remove(observer: INotificationAlertObserver): void;
  notify(): void;
  setStockCount(data: number): void;
  getStockCount(): number;
}
