import BookingStatus from "../constants/BookingStatus";
import Seat from "./Seat";
import Show from "./Show";

class Booking {
  private _id: string;
  private _user: string; // User is a string for simplicity
  private _show: Show;
  private _seatsBooked: Array<Seat>;
  private _bookingStatus: BookingStatus;

  constructor(id: string, user: string, show: Show, seatsBooked: Array<Seat>) {
    this._id = id;
    this._user = user;
    this._show = show;
    this._seatsBooked = seatsBooked;
    this._bookingStatus = BookingStatus.CREATED;
  }

  getId(): string {
    return this._id;
  }

  getUser(): string {
    return this._user;
  }

  getShow(): Show {
    return this._show;
  }

  getSeats(): Array<Seat> {
    return this._seatsBooked;
  }

  getBookingStatus(): BookingStatus {
    return this._bookingStatus;
  }

  isConfirmed(): boolean {
    return this._bookingStatus === BookingStatus.CONFIRMED;
  }

  confirmBooking(): void {
    if (this._bookingStatus != BookingStatus.CREATED) {
      throw new Error(`Invalid booking operation`);
    }
    this._bookingStatus = BookingStatus.CONFIRMED;
  }

  expireBooking(): void {
    if (this._bookingStatus != BookingStatus.CREATED) {
      throw new Error(`Invalid booking operation`);
    }
    this._bookingStatus = BookingStatus.EXPIRED;
  }
}

export default Booking;
