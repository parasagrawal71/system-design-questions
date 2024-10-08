import { ParkingSpot } from "../models/ParkingSpot";
import { ParkingStrategy } from "../strategy/ParkingStrategy";
import { ParkingManager } from "./ParkingManager";

export class FourWheelerManager extends ParkingManager {
  constructor(spots: ParkingSpot[]) {
    super(spots, new ParkingStrategy());
  }
}
