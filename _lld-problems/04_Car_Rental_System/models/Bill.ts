import { ReservationType } from "../constants/constants";
import { Reservation } from "./Reservation";

export class Bill {
  private _reservation: Reservation;
  private _totalBillAmount: number;
  private _isBillPaid: boolean;

  constructor(reservation: Reservation) {
    this._reservation = reservation;
    this._totalBillAmount = this.computeBillAmount();
    this._isBillPaid = false;
  }

  computeBillAmount(): number {
    if (this._reservation.reservationType === ReservationType.HOURLY) {
      // Compute number of hours. For simplicity, take 10
      return 10 * this._reservation.vehicle.hourlyRentalCost;
    } else if (this._reservation.reservationType === ReservationType.DAILY) {
      // Compute number of days. For simplicity, take 3
      return 3 * this._reservation.vehicle.dailyRentalCost;
    }
    return 0;
  }

  public set isBillPaid(isPaid: boolean) {
    this._isBillPaid = isPaid;
  }

  public get totalBillAmount(): number {
    return this._totalBillAmount;
  }

  public get isBillPaid(): boolean {
    return this._isBillPaid;
  }

  public get reservation(): Reservation {
    return this._reservation;
  }
}
