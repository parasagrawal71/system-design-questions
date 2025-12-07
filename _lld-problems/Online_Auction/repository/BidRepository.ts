import { BidStatus } from "../enum/BidStatus";
import { Bid } from "../model/Bid";

export class BidRepository {
  private bidList = new Map<string, Bid>();

  save(bid: Bid): void {
    this.bidList.set(bid.getId(), bid);
  }

  getById(id: string): Bid | undefined {
    return this.bidList.get(id);
  }

  getAllBids(): Bid[] {
    return Array.from(this.bidList.values());
  }

  getBidsByAuctionId(auctionId: string): Bid[] {
    return Array.from(this.bidList.values()).filter((bid) => bid.getAuctionId() === auctionId);
  }

  update(id: string, bid: Bid): void {
    this.bidList.set(id, bid);
  }

  updateStatus(id: string, status: BidStatus): void {
    const bid = this.bidList.get(id);
    if (!bid) {
      throw new Error("Bid does not exist");
    }
    bid.setStatus(status);
    this.bidList.set(id, bid);
  }
}
