import { Ride } from "../model/Ride";

export class RideRepository {
  private rides = new Map<string, Ride>();

  save(ride: Ride): void {
    this.rides.set(ride.getId(), ride);
  }

  getById(id: string): Ride | undefined {
    return this.rides.get(id);
  }
}
