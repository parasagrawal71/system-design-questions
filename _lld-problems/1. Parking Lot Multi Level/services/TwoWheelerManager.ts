import { ParkingSpot } from "../models/ParkingSpot";
import { NearToExitStrategy } from "../strategy/NearToExitStrategy";
import { ParkingManager } from "./ParkingManager";

export class TwoWheelerManager extends ParkingManager {
  constructor(spots: ParkingSpot[]) {
    super(spots, new NearToExitStrategy());
  }
}
