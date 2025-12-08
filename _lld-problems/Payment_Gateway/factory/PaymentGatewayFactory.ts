import { GatewayType } from "../enum/GatewayType";
import { PaytmBankingSystem } from "../external/PaytmBankingSystem";
import { RazorpayBankingSystem } from "../external/RazorpayBankingSystem";
import { PaymentGateway } from "../service/PaymentGateway";
import { PaymentGatewayProxy } from "../service/PaymentGatewayProxy";
import { PaytmPaymentGateway } from "../service/PaytmPaymentGateway";
import { RazorpayPaymentGateway } from "../service/RazorpayPaymentGateway";

export class PaymentGatewayFactory {
  static INSTANCE: PaymentGatewayFactory;

  static getInstance() {
    if (!PaymentGatewayFactory.INSTANCE) {
      PaymentGatewayFactory.INSTANCE = new PaymentGatewayFactory();
    }
    return PaymentGatewayFactory.INSTANCE;
  }

  getGateway(gatewayType: GatewayType): PaymentGateway {
    switch (gatewayType) {
      case GatewayType.PAYTM:
        return new PaymentGatewayProxy(new PaytmPaymentGateway(), new PaytmBankingSystem(), 5);
      case GatewayType.RAZORPAY:
        return new PaymentGatewayProxy(new RazorpayPaymentGateway(), new RazorpayBankingSystem(), 3);
      default:
        throw new Error("Invalid gateway type");
    }
  }
}
