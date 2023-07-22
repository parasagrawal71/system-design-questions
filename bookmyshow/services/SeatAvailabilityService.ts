import Seat from "../models/Seat";
import SeatLock from "../models/SeatLock";
import Show from "../models/Show";
import SeatLockService from "./SeatLockService";

class SeatAvailabilityService {
  private _seatLockService: SeatLockService;

  constructor(seatLockService: SeatLockService) {
    this._seatLockService = seatLockService;
  }

  getAvailableSeats(show: Show, bookedSeats: Seat[]) {
    const allSeats = show.getScreen().getSeats();
    const seatLocks = this._seatLockService.getSeatLocksForShow(show);
    const lockedSeats = seatLocks.map((seatLock: SeatLock) => seatLock.getSeat());
    const lockedSeatIds = lockedSeats.map((seat: Seat) => seat.getId());
    const bookedSeatIds = bookedSeats.map((bookedSeat: Seat) => bookedSeat.getId());

    const availableSeats = allSeats.filter(
      (seat: Seat) => ![...lockedSeatIds, ...bookedSeatIds].includes(seat.getId()),
    );
    return availableSeats;
  }

  getUnavailableSeats(show: Show, bookedSeats: Seat[]): Seat[] {
    const seatLocks = this._seatLockService.getSeatLocksForShow(show);
    const lockedSeats = seatLocks.map((seatLock: SeatLock) => seatLock.getSeat());
    return [...bookedSeats, ...lockedSeats];
  }
}

export default SeatAvailabilityService;
