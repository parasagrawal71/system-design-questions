import { ReservationStatus } from "../constants/constants";
import { Bill } from "./Bill";

export class Payment {
  public payBill(bill: Bill) {
    // Payment processing

    // Update reservation status
    bill.reservation.status = ReservationStatus.INPROGRESS;

    // Update bill status
    bill.isBillPaid = true;
  }
}
