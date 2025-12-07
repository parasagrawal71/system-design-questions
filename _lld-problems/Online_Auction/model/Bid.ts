import { BidStatus } from "../enum/BidStatus";

export class Bid {
  private id: string;

  private auctionId: string;

  private buyerId: string;

  private bidValue: number;

  private status: BidStatus;

  constructor(id: string, auctionId: string, buyerId: string, bidValue: number) {
    this.id = id;
    this.auctionId = auctionId;
    this.buyerId = buyerId;
    this.bidValue = bidValue;
    this.status = BidStatus.CREATED;
  }

  public getId(): string {
    return this.id;
  }

  public getAuctionId(): string {
    return this.auctionId;
  }

  public getBuyerId(): string {
    return this.buyerId;
  }

  public getBidValue(): number {
    return this.bidValue;
  }

  public getStatus(): BidStatus {
    return this.status;
  }

  public setStatus(status: BidStatus): void {
    this.status = status;
  }
}
