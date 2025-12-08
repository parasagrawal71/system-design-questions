import { PaytmBankingSystem } from "../external/PaytmBankingSystem";
import { PaymentRequest } from "../model/PaymentRequest";
import { PaymentGateway } from "./PaymentGateway";

export class PaytmPaymentGateway extends PaymentGateway {
  constructor() {
    super(new PaytmBankingSystem());
  }

  validatePayment(paymentRequest: PaymentRequest): boolean {
    console.log(`[PaytmPaymentGateway] Validating payment...`);
    if (paymentRequest.getAmount() <= 0 || paymentRequest.getCurrency() !== "INR") {
      return false;
    }
    return true;
  }

  initiatePayment(paymentRequest: PaymentRequest): boolean {
    console.log(
      `[PaytmPaymentGateway] Initiating payment of Rs. ${paymentRequest.getAmount()} from ${paymentRequest.getSender()} to ${paymentRequest.getReceiver()}...`,
    );
    return this.bankingSystem.processPayment(
      paymentRequest.getAmount(),
      paymentRequest.getSender(),
      paymentRequest.getReceiver(),
    );
  }

  confirmPayment(paymentRequest: PaymentRequest): boolean {
    console.log(
      `[PaytmPaymentGateway] Confirming payment of Rs. ${paymentRequest.getAmount()} from ${paymentRequest.getSender()} to ${paymentRequest.getReceiver()}...`,
    );
    // Simulating always success
    return true;
  }
}
