import { BidStatus } from "../enum/BidStatus";
import { Bid } from "../model/Bid";
import { IWinningStrategy } from "./IWinningStrategy";

export class HighestUniqueWinningStrategy implements IWinningStrategy {
  findWinner(bids: Bid[]): Bid {
    // Get highest unique bid
    const frequencyMap = new Map<number, number>(); // bidValue -> frequency
    bids.forEach((bid: Bid) => {
      if (bid.getStatus() === BidStatus.CREATED) {
        const bidValue = bid.getBidValue();
        if (!frequencyMap.has(bidValue)) {
          frequencyMap.set(bidValue, 0);
        }
        frequencyMap.set(bidValue, (frequencyMap.get(bidValue) || 0) + 1);
      }
    });

    let max = -Infinity;
    let maxId = "";
    bids.forEach((bid: Bid) => {
      if (bid.getStatus() === BidStatus.CREATED && frequencyMap.get(bid.getBidValue()) === 1) {
        if (bid.getBidValue() > max) {
          max = bid.getBidValue();
          maxId = bid.getId();
        }
      }
    });

    return bids.find((bid) => bid.getId() === maxId)!;
  }
}
