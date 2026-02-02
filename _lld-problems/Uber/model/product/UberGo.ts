import { ProductType } from "../../enums/ProductType";
import { Product } from "./Product";

export class UberGo extends Product {
  constructor() {
    super("2", ProductType.UBER_GO);
  }

  getBaseRate(): number {
    return 20;
  }

  getPerKmRate(): number {
    return 3;
  }

  getPerMinRate(): number {
    return 3;
  }
}
