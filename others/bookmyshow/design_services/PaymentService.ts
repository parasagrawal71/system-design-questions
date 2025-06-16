// @ts-nocheck
import Booking from "../models/Booking";
import SeatLockService from "./SeatLockService";

class PaymentService {
  _seatLockService: SeatLockService;

  constructor(seatLockService: SeatLockService) {}

  makePayment(booking: Booking, user: string): boolean {}

  processPaymentFailure(booking: Booking, user: string): void {}
}

export default PaymentService;
