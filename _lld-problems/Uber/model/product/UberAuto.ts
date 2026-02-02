import { ProductType } from "../../enums/ProductType";
import { Product } from "./Product";

export class UberAuto extends Product {
  constructor() {
    super("1", ProductType.UBER_AUTO);
  }

  getBaseRate(): number {
    return 10;
  }

  getPerKmRate(): number {
    return 2;
  }

  getPerMinRate(): number {
    return 1;
  }
}
