import { ParkingSpot } from "../models/ParkingSpot";
import { NearToExitStrategy } from "../strategy/NearToExitStrategy";
import { ParkingSpotManager } from "./ParkingSpotManager";

export class TwoWheelerManager extends ParkingSpotManager {
  constructor(spots: ParkingSpot[]) {
    super(spots, new NearToExitStrategy());
  }
}
