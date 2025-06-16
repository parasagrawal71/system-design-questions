// @ts-nocheck
import Seat from "../models/Seat";
import Show from "../models/Show";
import SeatLock from "../models/SeatLock";

class SeatLockService {
  private _seatLocks: Record<string, SeatLock[]>;

  constructor() {
    this._seatLocks = {};
  }

  createLock(show: Show, seat: Seat, user: string): SeatLock {}

  lockSeats(show: Show, seats: Seat[], user: string): void {}

  unlockSeats(show: Show): void {}

  getSeatLocksForShow(show: Show): SeatLock[] {}
}

export default SeatLockService;
