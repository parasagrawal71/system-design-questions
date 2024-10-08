import { ParkingSpot } from "../models/ParkingSpot";
import { ParkingStrategy } from "./ParkingStrategy";

export class NearToExitStrategy extends ParkingStrategy {
  findFreeSpot(spots: ParkingSpot[]): ParkingSpot | null {
    const spot = spots.reverse().find((s) => s.isEmpty);
    return spot ? (spot as ParkingSpot) : null;
  }
}
