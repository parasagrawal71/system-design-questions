import { HourlyPricingStrategy } from "../strategy/HourlyPricingStrategy";
import { CostComputation } from "./CostComputation";

export class CostComputation4W extends CostComputation {
  constructor() {
    super(new HourlyPricingStrategy());
  }
}
