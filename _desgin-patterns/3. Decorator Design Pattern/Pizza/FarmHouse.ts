import { BasePizza } from "./BasePizza";

export class FarmHouse extends BasePizza {
  public cost(): number {
    return 150;
  }
}
