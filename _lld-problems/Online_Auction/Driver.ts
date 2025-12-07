import { Auction } from "./model/Auction";
import { Bid } from "./model/Bid";
import { Buyer } from "./model/Buyer";
import { Seller } from "./model/Seller";
import { AuctionRepository } from "./repository/AuctionRepository";
import { BidRepository } from "./repository/BidRepository";
import { BuyerRepository } from "./repository/BuyerRepository";
import { SellerRepository } from "./repository/SellerRepository";
import { AuctionService } from "./service/AuctionService";
import { BidService } from "./service/BidService";
import { BuyerService } from "./service/BuyerService";
import { SellerService } from "./service/SellerService";
import { HighestUniqueWinningStrategy } from "./strategy/HighestUniqueWinningStrategy";

(function () {
  // Repositories
  const sellerRepository = new SellerRepository();
  const buyerRepository = new BuyerRepository();
  const auctionRepository = new AuctionRepository();
  const bidRepository = new BidRepository();

  // Services
  const sellerService = new SellerService(sellerRepository);
  const buyerService = new BuyerService(buyerRepository);
  const auctionService = new AuctionService(
    auctionRepository,
    sellerRepository,
    bidRepository,
    new HighestUniqueWinningStrategy(),
    // new LowestUniqueWinningStrategy(),
  );
  const bidService = new BidService(bidRepository, buyerRepository, auctionRepository);

  // Add sellers
  const seller1: Seller = new Seller("S1", "Seller 1");
  sellerService.addSeller(seller1);

  // Add buyers
  const buyer1: Buyer = new Buyer("B1", "Buyer 1");
  const buyer2: Buyer = new Buyer("B2", "Buyer 2");
  buyerService.addBuyer(buyer1);
  buyerService.addBuyer(buyer2);

  // Add an auction
  const auction1: Auction = new Auction("auction_1", "Auction 1", 100, 1000, "S1", true);
  auctionService.createAuction(auction1);

  // Place Bids
  const bid1: Bid = new Bid("bid_1", "auction_1", "B1", 800);
  const bid2: Bid = new Bid("bid_2", "auction_1", "B2", 900);
  const bid3: Bid = new Bid("bid_3", "auction_1", "B2", 999);
  console.log(`PLACE BID ACTION: `);
  bidService.placeBid(bid1);
  bidService.placeBid(bid2);
  bidService.placeBid(bid3);

  // Display Auction
  auctionService.displayAuction("auction_1");

  // Update bid
  console.log(`UPDATE BID ACTION: `);
  bidService.updateBid("bid_1", 850);

  // Display Auction
  auctionService.displayAuction("auction_1");

  // Withdraw bid
  console.log(`WITHDRAW BID ACTION: `);
  bidService.withdrawBid("bid_3");

  // Display Auction
  auctionService.displayAuction("auction_1");

  // Close Auction
  console.log(`CLOSE BID ACTION: `);
  const winningBid: Bid = auctionService.closeAuction("auction_1");
  console.log(`The winner is ${winningBid.getBuyerId()}`);

  // Display Auction
  auctionService.displayAuction("auction_1");
})();

/**
    Good-to-have features (Not coded yet but they are straight-forward):
    ------
    - Budget restriction and Update budget
        (total/available budget at buyer level)
    - Upgrade the buyer to a preferred buyer if he has participated in more 
    than 2 auctions. And for choosing a winner, whenever there is a tie on 
    the winning bid, preference should be given to the preferred buyer 
    and if it’s tied between multiple preferred buyers, fallback to the 
    next highest bid. The preferred buyer is across sellers on the platform.
     (Compute buyer participation dynamically or pre-compute it at buyer level)

 */
