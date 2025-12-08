import { BankingSystem } from "../external/BankingSystem";
import { PaymentRequest } from "../model/PaymentRequest";

export abstract class PaymentGateway {
  constructor(protected readonly bankingSystem: BankingSystem) {}

  abstract validatePayment(paymentRequest: PaymentRequest): boolean;

  abstract initiatePayment(paymentRequest: PaymentRequest): boolean;

  abstract confirmPayment(paymentRequest: PaymentRequest): boolean;

  processPayment(paymentRequest: PaymentRequest): boolean {
    if (!this.validatePayment(paymentRequest)) {
      console.log("[PaymentGateway] Validation failed");
      return false;
    }
    if (!this.initiatePayment(paymentRequest)) {
      console.log("[PaymentGateway] Initiation failed");
      return false;
    }
    if (!this.confirmPayment(paymentRequest)) {
      console.log("[PaymentGateway] Confirmation failed");
      return false;
    }
    return true;
  }
}
