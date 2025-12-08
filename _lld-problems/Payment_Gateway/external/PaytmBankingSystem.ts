import { BankingSystem } from "./BankingSystem";

export class PaytmBankingSystem extends BankingSystem {
  processPayment(amount: number, sender: string, receiver: string): boolean {
    console.log("[Paytm Banking System] Processing payment of Rs. " + amount + "...");
    // Simulate 80% success rate
    if (Math.random() < 0.8) {
      console.log("[Paytm Banking System] Payment successful");
      return true;
    } else {
      console.log("[Paytm Banking System] Payment failed");
      return false;
    }
  }
}
