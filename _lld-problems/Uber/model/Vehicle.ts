import { Product } from "./product/Product";

export class Vehicle {
  private numberPlate: string;
  private supportedProducts: Product[];

  constructor(numberPlate: string, supportedProducts: Product[]) {
    this.numberPlate = numberPlate;
    this.supportedProducts = supportedProducts;
  }

  getNumberPlate(): string {
    return this.numberPlate;
  }

  getSupportedProducts(): Product[] {
    return this.supportedProducts;
  }
}
