import { Ticket } from "../models/Ticket";
import { IPricingStrategy } from "../strategy/IPricingStrategy";

export class CostComputation {
  private _strategy: IPricingStrategy;

  constructor(strategy: IPricingStrategy) {
    this._strategy = strategy;
  }

  computePrice(ticket: Ticket): number {
    return this._strategy.calculatePrice(ticket);
  }
}
