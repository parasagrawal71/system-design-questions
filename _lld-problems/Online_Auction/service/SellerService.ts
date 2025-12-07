import { Seller } from "../model/Seller";
import { SellerRepository } from "../repository/SellerRepository";

export class SellerService {
  constructor(private readonly sellerRepository: SellerRepository) {}

  addSeller(seller: Seller): void {
    this.sellerRepository.save(seller);
  }
}
