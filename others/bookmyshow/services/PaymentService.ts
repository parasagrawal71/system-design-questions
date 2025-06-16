import Booking from "../models/Booking";
import SeatLockService from "./SeatLockService";

class PaymentService {
  _seatLockService: SeatLockService;

  constructor(seatLockService: SeatLockService) {
    this._seatLockService = seatLockService;
  }

  makePayment(booking: Booking, user: string): boolean {
    if (booking.getUser() !== user) {
      throw new Error(`Bad Request`);
    }

    // TIMER 5 secs
    return true;
  }

  processPaymentFailure(booking: Booking, user: string): void {
    if (booking.getUser() !== user) {
      throw new Error(`Bad Request`);
    }

    // Retry few times

    this._seatLockService.unlockSeats(booking.getShow()); // Unlock seats
  }
}

export default PaymentService;
