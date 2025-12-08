import { PaymentController } from "./controller/PaymentController";
import { GatewayType } from "./enum/GatewayType";
import { PaymentRequest } from "./model/PaymentRequest";

(function main() {
  const paymentController = new PaymentController();

  console.log(`Handling payment via Paytm...`);
  const req1 = new PaymentRequest("John", "Paras", 100, "INR");
  const res1 = paymentController.handlePayment(GatewayType.PAYTM, req1);
  console.log(`${res1 ? "Payment successful" : "Payment failed"}\n`);

  console.log(`Handling payment via Razorpay...`);
  const req2 = new PaymentRequest("Paras", "Jane", 100, "USD");
  const res2 = paymentController.handlePayment(GatewayType.RAZORPAY, req2);
  console.log(`${res2 ? "Payment successful" : "Payment failed"}`);
})();
