import { Bid } from "../model/Bid";

export interface IWinningStrategy {
  findWinner(bids: Bid[]): Bid;
}
