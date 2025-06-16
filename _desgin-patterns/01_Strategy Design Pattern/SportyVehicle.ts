import { SpecialDriveStrategy } from "./Strategy/SpecialDriveStrategy";
import { Vehicle } from "./Vehicle";

export class SportyVehicle extends Vehicle {
  constructor() {
    super(new SpecialDriveStrategy());
  }
}
