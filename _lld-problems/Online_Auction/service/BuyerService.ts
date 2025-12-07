import { Buyer } from "../model/Buyer";
import { BuyerRepository } from "../repository/BuyerRepository";

export class BuyerService {
  constructor(private readonly buyerRepository: BuyerRepository) {}

  addBuyer(buyer: Buyer): void {
    this.buyerRepository.save(buyer);
  }
}
