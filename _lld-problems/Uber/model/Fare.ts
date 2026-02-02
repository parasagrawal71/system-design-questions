import { FARE_TTL } from "../constants/constants";
import { Location } from "./Location";
import { Product } from "./product/Product";

export class Fare {
  private id: string;
  private product: Product;
  private src: Location;
  private dest: Location;
  private estimatedFare: number;
  private createdAt: Date;
  private riderId: string;
  private expiry: Date;

  constructor(product: Product, src: Location, dest: Location, estimatedFare: number, riderId: string) {
    this.id = Math.random().toString(); // OR, Date.now().toString()
    this.product = product;
    this.src = src;
    this.dest = dest;
    this.estimatedFare = estimatedFare;
    this.createdAt = new Date();
    this.riderId = riderId;
    this.expiry = new Date(this.createdAt.getTime() + FARE_TTL);
  }

  getId(): string {
    return this.id;
  }

  getRiderId(): string {
    return this.riderId;
  }

  getProduct(): Product {
    return this.product;
  }

  getEstimatedFare(): number {
    return this.estimatedFare;
  }

  isExpired(): boolean {
    return new Date().getTime() > this.expiry.getTime();
  }
}
