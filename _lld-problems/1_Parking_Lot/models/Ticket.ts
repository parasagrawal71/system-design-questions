import { EntryPoint } from "./EntryPoint";
import { ParkingSpot } from "./ParkingSpot";
import { Vehicle } from "./Vehicle";

export class Ticket {
  private _entryTime: Date;
  private _parkingSpot: ParkingSpot;
  private _vehicle: Vehicle;
  private _entryPoint: EntryPoint;

  constructor(entryTime: Date, parkingSpot: ParkingSpot, vehicle: Vehicle, entryPoint: EntryPoint) {
    this._entryTime = entryTime;
    this._parkingSpot = parkingSpot;
    this._vehicle = vehicle;
    this._entryPoint = entryPoint;
  }

  public get entryTime(): Date {
    return this._entryTime;
  }

  public get parkingSpot(): ParkingSpot {
    return this._parkingSpot;
  }

  public get vehicle(): Vehicle {
    return this._vehicle;
  }

  public get entryPoint(): EntryPoint {
    return this._entryPoint;
  }

  public set entryTime(entryTime: Date) {
    this._entryTime = entryTime;
  }

  public set parkingSpot(parkingSpot: ParkingSpot) {
    this._parkingSpot = parkingSpot;
  }

  public set vehicle(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }

  public set entryPoint(entryPoint: EntryPoint) {
    this._entryPoint = entryPoint;
  }
}
