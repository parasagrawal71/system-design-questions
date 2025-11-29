import { ReservationStatus, ReservationType } from "../constants/constants";
import { Location } from "./Location";
import { Reservation } from "./Reservation";
import { User } from "./User";
import { Vehicle } from "./Vehicle";
import { VehicleInventoryMgmt } from "./VehicleInventoryMgmt";

export class Store {
  private _storeId: number;
  private _vehicleInventoryMgmt: VehicleInventoryMgmt;
  private _location: Location;
  private _reservations: Reservation[] = [];

  public get location(): Location {
    return this._location;
  }

  constructor(storeId: number, location: Location) {
    this._storeId = storeId;
    this._location = location;
    this._vehicleInventoryMgmt = new VehicleInventoryMgmt([]);
  }

  public setVehicles(vehicles: Vehicle[]) {
    this._vehicleInventoryMgmt = new VehicleInventoryMgmt(vehicles);
  }

  public getVehicles(): Vehicle[] {
    return this._vehicleInventoryMgmt.getVehicles();
  }

  public createReservation(
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
  ): Reservation {
    const reservation = new Reservation(
      vehicle,
      user,
      bookingDate,
      rentalStartDate,
      rentalEndDate,
      rentalStartTime,
      rentalEndTime,
      pickupLocation,
      dropLocation,
      reservationType,
    );
    this._reservations.push(reservation);
    return reservation;
  }

  public completeReservation(reservation: Reservation): void {
    // this._reservations = this._reservations.filter((r) => r.reservationId !== reservation.reservationId);
    reservation.status = ReservationStatus.COMPLETED;
  }
}
