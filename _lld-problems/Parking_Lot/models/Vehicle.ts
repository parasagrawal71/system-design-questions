import { VEHICLE_TYPE } from "../constants/constants";

export class Vehicle {
  private _vehicleNo: string;
  private _vehicleType: VEHICLE_TYPE;

  constructor(vehicleNo: string, vehicleType: VEHICLE_TYPE) {
    this._vehicleNo = vehicleNo;
    this._vehicleType = vehicleType;
  }

  public get vehicleNo(): string {
    return this._vehicleNo;
  }

  public set vehicleNo(vehicleNo: string) {
    this._vehicleNo = vehicleNo;
  }

  public get vehicleType(): VEHICLE_TYPE {
    return this._vehicleType;
  }

  public set vehicleType(vehicleType: VEHICLE_TYPE) {
    this._vehicleType = vehicleType;
  }
}
