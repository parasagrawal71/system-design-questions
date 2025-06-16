import { STATUS, VEHICLE_TYPE } from "../constants/constants";

export class Vehicle {
  private _vehicleId: number = 0;
  private _vehicleNo: number = 0;
  private _vehicleType: VEHICLE_TYPE;
  private _company: string = "";
  private _model: string = "";
  private _kmDriven: number = 0;
  private _manufacturingDate: Date = new Date();
  private _average: number = 0;
  private _cc: number = 0;
  private _dailyRentalCost: number = 0;
  private _hourlyRentalCost: number = 0;
  private _numOfSeats: number = 0;
  private _status: STATUS = STATUS.INACTIVE;

  constructor(vehicleType: VEHICLE_TYPE) {
    this._vehicleType = vehicleType;
  }

  public get vehicleNo(): number {
    return this._vehicleNo;
  }

  public get dailyRentalCost(): number {
    return this._dailyRentalCost;
  }

  public get hourlyRentalCost(): number {
    return this._hourlyRentalCost;
  }

  public setVehicle(
    vehicleId: number,
    vehicleNo: number,
    company: string,
    model: string,
    kmDriven: number,
    manufacturingDate: Date,
    average: number,
    cc: number,
    dailyRentalCost: number,
    hourlyRentalCost: number,
    numOfSeats: number,
    status: STATUS,
  ) {
    this._vehicleId = vehicleId;
    this._vehicleNo = vehicleNo;
    this._company = company;
    this._model = model;
    this._kmDriven = kmDriven;
    this._manufacturingDate = manufacturingDate;
    this._average = average;
    this._cc = cc;
    this._dailyRentalCost = dailyRentalCost;
    this._hourlyRentalCost = hourlyRentalCost;
    this._numOfSeats = numOfSeats;
    this._status = status;
  }
}
