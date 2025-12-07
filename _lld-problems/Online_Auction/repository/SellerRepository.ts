import { Seller } from "../model/Seller";

export class SellerRepository {
  private sellers = new Map<string, Seller>();

  save(seller: Seller): void {
    this.sellers.set(seller.getId(), seller);
  }

  getById(id: string): Seller | undefined {
    return this.sellers.get(id);
  }
}
