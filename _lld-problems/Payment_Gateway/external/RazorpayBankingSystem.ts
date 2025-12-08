import { BankingSystem } from "./BankingSystem";

export class RazorpayBankingSystem extends BankingSystem {
  processPayment(amount: number, sender: string, receiver: string): boolean {
    console.log("[Razorpay Banking System] Processing payment of Rs. " + amount + "...");
    // Simulate 90% success rate
    if (Math.random() < 0.9) {
      console.log("[Razorpay Banking System] Payment successful");
      return true;
    } else {
      console.log("[Razorpay Banking System] Payment failed");
      return false;
    }
  }
}
