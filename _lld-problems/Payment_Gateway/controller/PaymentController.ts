import { GatewayType } from "../enum/GatewayType";
import { PaymentGatewayFactory } from "../factory/PaymentGatewayFactory";
import { PaymentRequest } from "../model/PaymentRequest";
import { PaymentService } from "../service/PaymentService";

export class PaymentController {
  paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  handlePayment(gatewayType: GatewayType, paymentRequest: PaymentRequest): boolean {
    this.paymentService.setGateway(PaymentGatewayFactory.getInstance().getGateway(gatewayType));
    return this.paymentService.processPayment(paymentRequest);
  }
}
