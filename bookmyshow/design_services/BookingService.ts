import Booking from "../models/Booking";
import Seat from "../models/Seat";
import Show from "../models/Show";
import SeatLockService from "./SeatLockService";

class BookingService {
  private _booking: Record<string, Booking>;
  private _seatLockService: SeatLockService;

  constructor(seatLockService: SeatLockService) {
    this._booking = {};
    this._seatLockService = seatLockService;
  }

  createBooking(user: string, show: Show, seats: Array<Seat>): Booking {}

  getBooking(bookingId: string): Booking {
    return this._booking[bookingId];
  }

  confirmBooking(booking: Booking, user: string): void {}

  getShowBookings(show: Show): Array<Booking> {}

  getBookedSeats(show: Show): Array<Seat> {}

  isAnySeatAlreadyBooked(show: Show, seats: Seat[]): boolean {}
}

export default BookingService;
