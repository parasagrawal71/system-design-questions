import { BasePizza } from "./BasePizza";

export class Margherita extends BasePizza {
  public cost(): number {
    return 100;
  }
}
