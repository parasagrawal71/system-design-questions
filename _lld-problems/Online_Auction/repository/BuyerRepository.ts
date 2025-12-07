import { Buyer } from "../model/Buyer";

export class BuyerRepository {
  private buyers = new Map<string, Buyer>();

  save(buyer: Buyer): void {
    this.buyers.set(buyer.getId(), buyer);
  }

  getById(id: string): Buyer | undefined {
    return this.buyers.get(id);
  }
}
