import Seat from "../models/Seat";
import Show from "../models/Show";
import SeatLockService from "./SeatLockService";

class SeatAvailabilityService {
  private _seatLockService: SeatLockService;

  constructor(seatLockService: SeatLockService) {
    this._seatLockService = seatLockService;
  }

  getAvailableSeats(show: Show, bookedSeats: Seat[]) {}

  getUnavailableSeats(show: Show, bookedSeats: Seat[]): Seat[] {}
}

export default SeatAvailabilityService;
