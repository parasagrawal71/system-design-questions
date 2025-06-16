import { HourlyPricingStrategy } from "../strategy/HourlyPricingStrategy";
import { CostComputation } from "./CostComputation";

export class CostComputation2W extends CostComputation {
  constructor() {
    super(new HourlyPricingStrategy());
  }
}
