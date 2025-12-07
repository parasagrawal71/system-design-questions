import { BidStatus } from "../enum/BidStatus";
import { Bid } from "../model/Bid";
import { AuctionRepository } from "../repository/AuctionRepository";
import { BidRepository } from "../repository/BidRepository";
import { BuyerRepository } from "../repository/BuyerRepository";

export class BidService {
  constructor(
    private readonly bidRepository: BidRepository,
    private readonly buyerRepository: BuyerRepository,
    private readonly auctionRepository: AuctionRepository,
  ) {}

  placeBid(bid: Bid): void {
    if (this.bidRepository.getById(bid.getId())) {
      throw new Error("Bid already exists");
    }

    const auction = this.auctionRepository.getById(bid.getAuctionId());
    if (!auction) {
      throw new Error("Auction does not exist");
    }

    if (!auction.getIsActive()) {
      throw new Error("Auction is not active");
    }

    if (!this.buyerRepository.getById(bid.getBuyerId())) {
      throw new Error("Buyer does not exist");
    }

    if (bid.getBidValue() < auction.getMinValue()) {
      throw new Error("Bid value cannot be less than min value");
    }

    if (bid.getBidValue() > auction.getMaxValue()) {
      throw new Error("Bid value cannot be greater than max value");
    }

    this.bidRepository.save(bid);
  }

  getBid(id: string): Bid | undefined {
    return this.bidRepository.getById(id);
  }

  getAllBids(): Bid[] {
    return Array.from(this.bidRepository.getAllBids());
  }

  updateBid(bidId: string, bidValue: number): void {
    const bid = this.bidRepository.getById(bidId);
    if (!bid) {
      throw new Error("Bid does not exist");
    }
    const auction = this.auctionRepository.getById(bid.getAuctionId());
    if (!auction?.getIsActive()) {
      throw new Error("Auction is closed");
    }
    const bidToUpdate = new Bid(bidId, bid.getAuctionId(), bid.getBuyerId(), bidValue);

    this.bidRepository.update(bidId, bidToUpdate);
  }

  withdrawBid(bidId: string): void {
    const bid = this.bidRepository.getById(bidId);
    if (!bid) {
      throw new Error("Bid does not exist");
    }
    const auction = this.auctionRepository.getById(bid.getAuctionId());
    if (!auction?.getIsActive()) {
      throw new Error("Auction is closed");
    }
    this.bidRepository.updateStatus(bidId, BidStatus.WITHDRAWN);
  }
}
