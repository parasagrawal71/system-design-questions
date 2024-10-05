import { SpecialDriveStrategy } from "./Strategy/SpecialDriveStrategy";
import { Vehicle } from "./Vehicle";

export class OffRoadVehicle extends Vehicle {
  constructor() {
    super(new SpecialDriveStrategy());
  }
}
