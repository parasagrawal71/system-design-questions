import Seat from "./Seat";
import Show from "./Show";

class SeatLock {
  private _seat: Seat;
  private _show: Show;
  private _lockTime: Date;
  private _timeoutInSecs: number;
  private _lockedBy: string;

  constructor(seat: Seat, show: Show, lockTime: Date, lockedBy: string, timeoutInSecs: number = 5) {
    this._seat = seat;
    this._show = show;
    this._lockTime = lockTime;
    this._lockedBy = lockedBy;
    this._timeoutInSecs = timeoutInSecs;
  }

  getSeat(): Seat {
    return this._seat;
  }

  getShow(): Show {
    return this._show;
  }

  isLockExpired(): boolean {
    let t = this._lockTime;
    t.setSeconds(t.getSeconds() + this._timeoutInSecs);
    return t.getTime() <= new Date().getTime();
  }
}

export default SeatLock;
