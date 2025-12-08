import { PaymentRequest } from "../model/PaymentRequest";
import { PaymentGateway } from "./PaymentGateway";

export class PaymentService {
  paymentGateway: PaymentGateway | null = null;

  constructor() {}

  setGateway(paymentGateway: PaymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  processPayment(paymentRequest: PaymentRequest): boolean {
    if (!this.paymentGateway) {
      throw new Error("Payment gateway not set");
    }
    return this.paymentGateway.processPayment(paymentRequest);
  }
}
