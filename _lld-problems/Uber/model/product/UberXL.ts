import { ProductType } from "../../enums/ProductType";
import { Product } from "./Product";

export class UberXL extends Product {
  constructor() {
    super("3", ProductType.UBER_XL);
  }

  getBaseRate(): number {
    return 30;
  }

  getPerKmRate(): number {
    return 5;
  }

  getPerMinRate(): number {
    return 5;
  }
}
