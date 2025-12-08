import { RazorpayBankingSystem } from "../external/RazorpayBankingSystem";
import { PaymentRequest } from "../model/PaymentRequest";
import { PaymentGateway } from "./PaymentGateway";

export class RazorpayPaymentGateway extends PaymentGateway {
  constructor() {
    super(new RazorpayBankingSystem());
  }

  validatePayment(paymentRequest: PaymentRequest): boolean {
    console.log(
      `[RazorpayPaymentGateway] Validating payment of Rs. ${paymentRequest.getAmount()} from ${paymentRequest.getSender()} to ${paymentRequest.getReceiver()} ...`,
    );
    if (paymentRequest.getAmount() <= 0) {
      return false;
    }
    return true;
  }

  initiatePayment(paymentRequest: PaymentRequest): boolean {
    console.log(
      `[RazorpayPaymentGateway] Initiating payment of Rs. ${paymentRequest.getAmount()} from ${paymentRequest.getSender()} to ${paymentRequest.getReceiver()}...`,
    );
    return this.bankingSystem.processPayment(
      paymentRequest.getAmount(),
      paymentRequest.getSender(),
      paymentRequest.getReceiver(),
    );
  }

  confirmPayment(paymentRequest: PaymentRequest): boolean {
    console.log(
      `[RazorpayPaymentGateway] Confirming payment of Rs. ${paymentRequest.getAmount()} from ${paymentRequest.getSender()} to ${paymentRequest.getReceiver()}...`,
    );
    // Simulating always success
    return true;
  }
}
