import { Ticket } from "../models/Ticket";
import { IPricingStrategy } from "../strategy/IPricingStrategy";

export class CostComputation {
  strategy: IPricingStrategy;

  constructor(strategy: IPricingStrategy) {
    this.strategy = strategy;
  }

  computePrice(ticket: Ticket): number {
    return this.strategy.calculatePrice(ticket);
  }
}
