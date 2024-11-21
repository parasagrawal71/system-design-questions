import { NormalDriveStrategy } from "./Strategy/NormalDriveStrategy";
import { Vehicle } from "./Vehicle";

export class PassengerVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStrategy());
  }
}
