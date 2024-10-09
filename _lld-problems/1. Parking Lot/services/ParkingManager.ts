import { ParkingSpot } from "../models/ParkingSpot";
import { Vehicle } from "../models/Vehicle";
import { ParkingStrategy } from "../strategy/ParkingStrategy";

export class ParkingManager {
  private _spots: ParkingSpot[] = [];
  private _parkingStrategy: ParkingStrategy;

  constructor(spots: ParkingSpot[], parkingStrategy: ParkingStrategy) {
    this._spots = spots;
    this._parkingStrategy = parkingStrategy;
  }

  public addParkingSpot(spot: ParkingSpot): void {
    this._spots.push(spot);
  }

  public getSpots(): ParkingSpot[] {
    return this._spots;
  }

  public removeParkingSpot(spot: ParkingSpot): void {
    this._spots = this._spots.filter((s) => s.id !== spot.id);
  }

  public getAvailableSpot(): ParkingSpot | null {
    return this._parkingStrategy.findFreeSpot(this._spots);
  }

  public parkVehicle(spot: ParkingSpot, vehicle: Vehicle) {
    spot.parkVehicle(vehicle);
  }

  public removeVehicle(spot: ParkingSpot) {
    spot.removeVehicle();
  }
}
