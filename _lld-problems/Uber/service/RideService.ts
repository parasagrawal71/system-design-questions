import { Mutex } from "async-mutex";
import { Location } from "../model/Location";
import { Product } from "../model/product/Product";
import { Ride } from "../model/Ride";
import { Rider } from "../model/Rider";
import { FareRepository } from "../repository/FareRepository";
import { RideRepository } from "../repository/RideRepository";
import { DriverMatchingService } from "./DriverMatchingService";

const mutex = new Mutex();

export class RideService {
  constructor(
    private readonly fareRepository: FareRepository,
    private readonly rideRepository: RideRepository,
    private readonly driverMatchingService: DriverMatchingService,
  ) {}

  async requestRide(fareId: string, product: Product, src: Location, dest: Location, rider: Rider) {
    const fare = this.fareRepository.getById(fareId, rider.getId());
    if (!fare) {
      throw new Error("Fare not found");
    }

    if (fare.isExpired()) {
      throw new Error("Fare has expired");
    }

    // Check if the fare belongs to the rider
    if (fare.getRiderId() !== rider.getId()) {
      throw new Error("Fare does not belong to the rider");
    }

    if (fare.getProduct().getType() !== product.getType()) {
      throw new Error("Product type mismatch");
    }

    // Find a driver
    const driver = this.driverMatchingService.findDriver(src, product);
    if (!driver) {
      throw new Error("No driver found");
    }
    const release = await mutex.acquire(); // ideally driver-wise lock
    try {
      driver.markUnavailable();
    } finally {
      release();
    }

    const ride = new Ride(src, dest, product, rider, driver, driver.getVehicle());

    this.rideRepository.save(ride);
    return ride;
  }

  // startRide

  // endRide

  // cancelRide
}
