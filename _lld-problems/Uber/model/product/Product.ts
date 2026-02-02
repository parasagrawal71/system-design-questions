import { ProductType } from "../../enums/ProductType";

export abstract class Product {
  private id: string;
  private type: ProductType;

  constructor(id: string, type: ProductType) {
    this.id = id;
    this.type = type;
  }

  getId(): string {
    return this.id;
  }

  getType(): ProductType {
    return this.type;
  }

  abstract getBaseRate(): number;

  abstract getPerKmRate(): number;

  abstract getPerMinRate(): number;
}
