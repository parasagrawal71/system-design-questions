import { ReservationStatus, ReservationType } from "../constants/constants";
import { Location } from "./Location";
import { User } from "./User";
import { Vehicle } from "./Vehicle";

export class Reservation {
  private _reservationId: number;
  private _vehicle: Vehicle;
  private _user: User;
  private _bookingDate: Date;
  private _rentalStartDate: Date;
  private _rentalEndDate: Date;
  private _rentalStartTime: string;
  private _rentalEndTime: string;
  private _pickupLocation: Location;
  private _dropLocation: Location;
  private _reservationType: ReservationType;
  private _reservationStatus: ReservationStatus;

  constructor(
    vehicle: Vehicle,
    user: User,
    bookingDate: Date,
    rentalStartDate: Date,
    rentalEndDate: Date,
    rentalStartTime: string,
    rentalEndTime: string,
    pickupLocation: Location,
    dropLocation: Location,
    reservationType: ReservationType,
  ) {
    this._reservationId = Math.random();
    this._vehicle = vehicle;
    this._user = user;
    this._bookingDate = bookingDate;
    this._rentalStartDate = rentalStartDate;
    this._rentalEndDate = rentalEndDate;
    this._rentalStartTime = rentalStartTime;
    this._rentalEndTime = rentalEndTime;
    this._pickupLocation = pickupLocation;
    this._dropLocation = dropLocation;
    this._reservationType = reservationType;
    this._reservationStatus = ReservationStatus.SCHEDULED;
  }

  public get reservationId(): number {
    return this._reservationId;
  }

  public get reservationType(): ReservationType {
    return this._reservationType;
  }

  public get vehicle(): Vehicle {
    return this._vehicle;
  }

  public get bookingDate(): Date {
    return this._bookingDate;
  }

  public get status(): ReservationStatus {
    return this._reservationStatus;
  }

  public set status(status: ReservationStatus) {
    this._reservationStatus = status;
  }
}
