import { BidStatus } from "../enum/BidStatus";
import { Auction } from "../model/Auction";
import { AuctionRepository } from "../repository/AuctionRepository";
import { BidRepository } from "../repository/BidRepository";
import { SellerRepository } from "../repository/SellerRepository";
import { IWinningStrategy } from "../strategy/IWinningStrategy";

export class AuctionService {
  constructor(
    private readonly auctionRepository: AuctionRepository,
    private readonly sellerRepository: SellerRepository,
    private readonly bidRepository: BidRepository,
    private readonly winningStrategy: IWinningStrategy,
  ) {}

  createAuction(auction: Auction): void {
    if (this.auctionRepository.getById(auction.getId())) {
      throw new Error("Auction already exists");
    }

    if (auction.getMinValue() > auction.getMaxValue()) {
      throw new Error("Min value cannot be greater than max value");
    }

    if (auction.getMinValue() < 0) {
      throw new Error("Min value cannot be negative");
    }

    if (auction.getMaxValue() < 0) {
      throw new Error("Max value cannot be negative");
    }

    if (!this.sellerRepository.getById(auction.getSellerId())) {
      throw new Error("Seller does not exist");
    }

    this.auctionRepository.save(auction);
  }

  closeAuction(auctionId: string): void {
    const auction = this.auctionRepository.getById(auctionId);
    if (!auction) {
      throw new Error("Auction does not exist");
    }

    // Find winner
    const bids = this.bidRepository.getBidsByAuctionId(auctionId);
    if (bids.length === 0) {
      throw new Error("No bids found");
    }
    const winnerBid = this.winningStrategy.findWinner(bids);
    this.bidRepository.updateStatus(winnerBid.getId(), BidStatus.WON);

    // Mark other bids as Lost
    bids.forEach((bid) => {
      if (bid.getStatus() === BidStatus.CREATED && bid.getId() !== winnerBid.getId()) {
        this.bidRepository.updateStatus(bid.getId(), BidStatus.LOST);
      }
    });

    this.auctionRepository.setInActive(auction.getId());
  }

  displayAuction(auctionId: string): void {
    const auction = this.auctionRepository.getById(auctionId);
    if (!auction) {
      throw new Error("Auction does not exist");
    }
    console.log(
      `Auction: ${auction.getName()} - Min Value: Rs ${auction.getMinValue()} - Max Value: Rs ${auction.getMaxValue()}`,
    );

    this.bidRepository.getBidsByAuctionId(auction.getId()).forEach((bid) => {
      console.log(`Bidder: ${bid.getBuyerId()}, Bid: Rs ${bid.getBidValue()}, Status: ${bid.getStatus()}`);
    });
    console.log("\n");
  }
}
