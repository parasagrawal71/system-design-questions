import { Fare } from "../model/Fare";

export class FareRepository {
  private fares = new Map<string, Fare>();

  constructor() {
    // A scheduled task to evict expired fares
    setInterval(() => {
      this.evictExpiredFares();
    }, 5000);
  }

  save(fare: Fare): void {
    this.fares.set(fare.getId(), fare);
  }

  getById(id: string, riderId: string): Fare | null {
    const fare = this.fares.get(id);

    if (fare?.isExpired()) {
      this.fares.delete(id);
    }

    return fare || null;
  }

  evictExpiredFares(): void {
    this.fares.forEach((fare) => {
      if (fare.isExpired()) {
        console.log(`Evicting expired fare: ${fare.getId()} for ${fare.getRiderId()}`);
        this.fares.delete(fare.getId());
      }
    });
  }
}
