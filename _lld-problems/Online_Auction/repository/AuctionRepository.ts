import { Auction } from "../model/Auction";

export class AuctionRepository {
  private auctionList = new Map<string, Auction>();

  save(auction: Auction): void {
    this.auctionList.set(auction.getId(), auction);
  }

  update(id: string, auction: Auction): void {
    this.auctionList.set(id, auction);
  }

  getById(id: string): Auction | undefined {
    return this.auctionList.get(id);
  }

  setInActive(id: string): void {
    const auction = this.auctionList.get(id);
    if (auction) {
      auction.setIsActive(false);
    }
  }
}
