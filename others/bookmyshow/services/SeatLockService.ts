import Seat from "../models/Seat";
import SeatLock from "../models/SeatLock";
import Show from "../models/Show";

class SeatLockService {
  private _seatLocks: Record<string, SeatLock[]>;

  constructor() {
    this._seatLocks = {};
  }

  createLock(show: Show, seat: Seat, user: string): SeatLock {
    const seatLock = new SeatLock(seat, show, new Date(), user);
    this._seatLocks[show.getId()].push(seatLock);
    return seatLock;
  }

  lockSeats(show: Show, seats: Seat[], user: string): void {
    if (!this._seatLocks[show.getId()]) {
      this._seatLocks[show.getId()] = [];
    }
    for (const seat of seats) {
      this.createLock(show, seat, user);
    }
  }

  unlockSeats(show: Show): void {
    this._seatLocks[show.getId()] = [];
  }

  getSeatLocksForShow(show: Show): SeatLock[] {
    return this._seatLocks[show.getId()] || [];
  }
}

export default SeatLockService;
