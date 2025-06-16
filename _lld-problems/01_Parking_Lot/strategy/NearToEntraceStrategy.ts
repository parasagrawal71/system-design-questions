import { EntryPoint } from "../models/EntryPoint";
import { ParkingSpot } from "../models/ParkingSpot";
import { ParkingStrategy } from "./ParkingStrategy";

export class NearToEntraceStrategy extends ParkingStrategy {
  findFreeSpot(spots: ParkingSpot[], entryPoint: EntryPoint): ParkingSpot | null {
    // Let's assume all odd number spots are near to odd entry points
    // and all even number spots are near to even entry points -- JUST For a strategy

    let firstFreeSpot: ParkingSpot | null = null;
    let spot: ParkingSpot | null = null;
    for (const sp of spots) {
      if (sp.isEmpty && firstFreeSpot === null) firstFreeSpot = sp;

      if (!sp.isEmpty) continue;

      if (entryPoint.id % 2 === 1 && sp.id % 2 === 1) {
        spot = sp;
        break;
      } else if (entryPoint.id % 2 === 0 && sp.id % 2 === 0) {
        spot = sp;
        break;
      }
    }

    return spot || firstFreeSpot || null;
  }
}
