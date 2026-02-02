import { Fare } from "../model/Fare";
import { Location } from "../model/Location";
import { Product } from "../model/product/Product";
import { FareRepository } from "../repository/FareRepository";
import { IPricingStrategy } from "../strategy/pricing/IPricingStrategy";

export class FareEstimationService {
  constructor(
    private readonly fareRepository: FareRepository,
    private readonly pricingStrategy: IPricingStrategy,
  ) {}

  getFareEstimates(src: Location, dest: Location, products: Product[]): Map<Product, number> {
    const estimates = new Map<Product, number>();

    // Actually Uber uses Routing Engine to calculate the distance and duration
    const distanceKm = src.distanceTo(dest);
    const durationMin = distanceKm * 2; // hardcoded it

    for (const product of products) {
      const base = this.calculateBaseFare(product, distanceKm, durationMin);
      const surge = this.pricingStrategy.calculateFare(src, dest);
      const totalPrice = parseFloat((base + surge).toFixed(2));
      estimates.set(product, totalPrice);
    }

    return estimates;
  }

  calculateBaseFare(product: Product, distanceKm: number, durationMin: number): number {
    return product.getBaseRate() + product.getPerKmRate() * distanceKm + product.getPerMinRate() * durationMin;
  }

  createFare(src: Location, dest: Location, product: Product, riderId: string): Fare {
    const estimates = this.getFareEstimates(src, dest, [product]);
    const priceEstimate = estimates.get(product);

    const fare = new Fare(product, src, dest, priceEstimate!, riderId);
    this.fareRepository.save(fare);
    return fare;
  }
}
