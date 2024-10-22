import { Vehicle } from "./Vehicle";

export class VehicleInventoryMgmt {
  private _vehicles: Vehicle[] = [];

  constructor(vehicles: Vehicle[]) {
    this._vehicles = vehicles;
  }

  // CRUD operations
  public addVehicle(vehicle: Vehicle) {
    this._vehicles.push(vehicle);
  }

  public getVehicles(): Vehicle[] {
    return this._vehicles;
  }

  public getVehicle(vehicleNo: number): Vehicle | null {
    const vehicle = this._vehicles.find((v) => v.vehicleNo === vehicleNo);
    return vehicle || null;
  }

  public removeVehicle(vehicleNo: number) {
    this._vehicles = this._vehicles.filter((v) => v.vehicleNo !== vehicleNo);
  }
}
