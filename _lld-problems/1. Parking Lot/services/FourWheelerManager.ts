import { ParkingSpot } from "../models/ParkingSpot";
import { ParkingStrategy } from "../strategy/ParkingStrategy";
import { ParkingSpotManager } from "./ParkingSpotManager";

export class FourWheelerManager extends ParkingSpotManager {
  constructor(spots: ParkingSpot[]) {
    super(spots, new ParkingStrategy());
  }
}
