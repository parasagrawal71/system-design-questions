import { ParkingSpot } from "../models/ParkingSpot";
import { NearToEntraceStrategy } from "../strategy/NearToEntraceStrategy";
import { ParkingManager } from "./ParkingManager";

export class TwoWheelerManager extends ParkingManager {
  constructor(spots: ParkingSpot[]) {
    super(spots, new NearToEntraceStrategy());
  }
}
