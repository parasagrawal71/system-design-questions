import { BankingSystem } from "../external/BankingSystem";
import { PaymentRequest } from "../model/PaymentRequest";
import { PaymentGateway } from "./PaymentGateway";

export class PaymentGatewayProxy extends PaymentGateway {
  private retries: number = 0;

  constructor(
    private readonly paymentGateway: PaymentGateway,
    protected readonly bankingSystem: BankingSystem,
    maxRetries: number,
  ) {
    super(bankingSystem);
    this.retries = maxRetries;
  }

  processPayment(paymentRequest: PaymentRequest): boolean {
    let attempt = 1;

    // Linear retry
    while (attempt <= this.retries) {
      console.log(`[PaymentGatewayProxy] Retrying payment (attempt = ${attempt})...`);
      if (this.paymentGateway.processPayment(paymentRequest)) {
        return true;
      }
      attempt++;
    }
    console.log(`[PaymentGatewayProxy] Payment failed after ${this.retries} attempts`);
    return false;
  }

  validatePayment(paymentRequest: PaymentRequest): boolean {
    return this.paymentGateway.validatePayment(paymentRequest);
  }

  initiatePayment(paymentRequest: PaymentRequest): boolean {
    return this.paymentGateway.initiatePayment(paymentRequest);
  }

  confirmPayment(paymentRequest: PaymentRequest): boolean {
    return this.paymentGateway.confirmPayment(paymentRequest);
  }
}
