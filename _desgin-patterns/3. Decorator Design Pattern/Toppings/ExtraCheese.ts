import { BasePizza } from "../Pizza/BasePizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class ExtraCheese extends ToppingDecorator {
  basePizza: BasePizza;

  constructor(basePizza: BasePizza) {
    super();
    this.basePizza = basePizza;
  }

  public cost(): number {
    return this.basePizza.cost() + 10;
  }
}
