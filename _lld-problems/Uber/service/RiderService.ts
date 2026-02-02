import { Rider } from "../model/Rider";
import { RiderRepository } from "../repository/RiderRepository";

export class RiderService {
  constructor(private readonly riderRepository: RiderRepository) {}

  registerRider(rider: Rider): void {
    this.riderRepository.save(rider);
  }

  getRiderById(riderId: string): Rider | undefined {
    const rider = this.riderRepository.getById(riderId);
    if (!rider) {
      throw new Error("Rider not found with id: " + riderId);
    }
    return rider;
  }
}
