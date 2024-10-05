import { IphoneObservable } from "./Observable/IphoneObservable";
import { IStocksObservable } from "./Observable/IStocksObservable";
import { EmailAlertObserver } from "./Observer/EmailAlertObserver";
import { INotificationAlertObserver } from "./Observer/INotificationAlertObserver";
import { MobileAlertObserver } from "./Observer/MobileAlertObserver";

(function main() {
  const iphoneStockObservable: IStocksObservable = new IphoneObservable();

  const observer1: INotificationAlertObserver = new EmailAlertObserver("xyz@example.com", iphoneStockObservable);
  const observer2: INotificationAlertObserver = new EmailAlertObserver("abc@example.com", iphoneStockObservable);
  const observer3: INotificationAlertObserver = new MobileAlertObserver("+919876543210", iphoneStockObservable);

  iphoneStockObservable.add(observer1);
  iphoneStockObservable.add(observer2);
  iphoneStockObservable.add(observer3);

  iphoneStockObservable.setStockCount(10);
})();
