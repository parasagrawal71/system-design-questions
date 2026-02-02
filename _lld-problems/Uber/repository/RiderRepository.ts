import { Rider } from "../model/Rider";

export class RiderRepository {
  private riders = new Map<string, Rider>();

  save(rider: Rider): void {
    this.riders.set(rider.getId(), rider);
  }

  getById(id: string): Rider | undefined {
    return this.riders.get(id);
  }
}
