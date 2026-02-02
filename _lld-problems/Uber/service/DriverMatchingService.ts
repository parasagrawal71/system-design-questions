import { Driver } from "../model/Driver";
import { Location } from "../model/Location";
import { Product } from "../model/product/Product";
import { DriverRepository } from "../repository/DriverRepository";
import { IDriverMatchingStrategy } from "../strategy/matching/IDriverMatchingStrategy";

export class DriverMatchingService {
  constructor(
    private readonly driverRepository: DriverRepository,
    private readonly driverMatchingStrategy: IDriverMatchingStrategy,
  ) {}

  findDriver(src: Location, product: Product): Driver {
    const nearbyDrivers = this.driverRepository.getNearbyDrivers(src, 100000); // Taking a large radius
    if (nearbyDrivers.length === 0) {
      throw new Error("No drivers available");
    }

    const filteredDrivers = nearbyDrivers.filter((driver) => {
      const supportedProductIds = driver
        .getVehicle()
        ?.getSupportedProducts()
        .map((p) => p.getId());
      return supportedProductIds.includes(product.getId());
    });
    if (filteredDrivers.length === 0) {
      throw new Error("No drivers available for this product");
    }

    return this.driverMatchingStrategy.findDriver(src, filteredDrivers);
  }
}
