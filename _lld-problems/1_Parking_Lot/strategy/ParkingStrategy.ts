import { ParkingSpot } from "../models/ParkingSpot";

export class ParkingStrategy {
  findFreeSpot(spots: ParkingSpot[]): ParkingSpot | null {
    const spot = spots.find((s) => s.isEmpty);
    return spot ? (spot as ParkingSpot) : null;
  }
}
