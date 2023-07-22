import Booking from "../models/Booking";
import Seat from "../models/Seat";
import Show from "../models/Show";
import { generateUUID } from "../utils/helper";
import SeatLockService from "./SeatLockService";

class BookingService {
  private _booking: Record<string, Booking>;
  private _seatLockService: SeatLockService;

  constructor(seatLockService: SeatLockService) {
    this._booking = {};
    this._seatLockService = seatLockService;
  }

  createBooking(user: string, show: Show, seats: Array<Seat>): Booking {
    // Check if any seat is already booked, throw an exception
    if (this.isAnySeatAlreadyBooked(show, seats)) {
      throw new Error("Seat(s) are already booked");
    }

    this._seatLockService.lockSeats(show, seats, "paras"); // Lock seats
    const bookingId = generateUUID();
    const booking = new Booking(bookingId, user, show, seats);
    this._booking[bookingId] = booking;
    return booking;

    // Create timer for booking expiry
  }

  getBooking(bookingId: string): Booking {
    return this._booking[bookingId];
  }

  confirmBooking(booking: Booking, user: string): void {
    if (booking.getUser() !== user) {
      throw new Error(`Bad Request`);
    }

    booking.confirmBooking();
    this._seatLockService.unlockSeats(booking.getShow());
    // Unlocking seats since the booking is being confirmed and permanently locked
  }

  getShowBookings(show: Show): Array<Booking> {
    const showBookings = [];
    for (const booking of Object.values(this._booking)) {
      if (show.getId() === booking.getShow().getId()) {
        showBookings.push(booking);
      }
    }
    return showBookings;
  }

  getBookedSeats(show: Show): Array<Seat> {
    const bookedSeats = [];
    const showBookings = this.getShowBookings(show);
    for (const booking of showBookings) {
      if (booking.isConfirmed()) {
        for (const seat of booking.getSeats()) {
          bookedSeats.push(seat);
        }
      }
    }
    return bookedSeats;
  }

  isAnySeatAlreadyBooked(show: Show, seats: Seat[]): boolean {
    const bookedSeats = this.getBookedSeats(show);
    const bookedSeatIds = bookedSeats.map((seat: Seat) => seat.getId());
    return seats.some((seat: Seat) => bookedSeatIds.includes(seat.getId()));
  }
}

export default BookingService;
