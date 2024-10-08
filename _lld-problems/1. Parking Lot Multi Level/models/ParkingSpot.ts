import { Vehicle } from "./Vehicle";

export class ParkingSpot {
  private _id: number;
  private _isEmpty: boolean = true;
  private _vehicle: Vehicle | null = null;
  private _price: number; // Hourly Price for the spot

  constructor(id: number, price: number) {
    this._id = id;
    this._price = price;
  }

  public get id(): number {
    return this._id;
  }

  public get isEmpty(): boolean {
    return this._isEmpty;
  }

  public get vehicle(): Vehicle | null {
    return this._vehicle;
  }

  public get price(): number {
    return this._price;
  }

  public set vehicle(vehicle: Vehicle | null) {
    this._vehicle = vehicle;
  }

  public set price(price: number) {
    this._price = price;
  }

  public set isEmpty(isEmpty: boolean) {
    this._isEmpty = isEmpty;
  }

  public set id(id: number) {
    this._id = id;
  }

  parkVehicle(vehicle: Vehicle): void {
    if (!this._isEmpty) {
      throw new Error("Spot is not empty");
    }

    this._isEmpty = false;
    this._vehicle = vehicle;
  }

  removeVehicle(): void {
    this._isEmpty = true;
    this._vehicle = null;
  }
}
