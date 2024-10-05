import { BasePizza } from "./BasePizza";

export class VegDelight extends BasePizza {
  public cost(): number {
    return 120;
  }
}
