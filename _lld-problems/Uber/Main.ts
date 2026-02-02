import { Driver } from "./model/Driver";
import { Location } from "./model/Location";
import { Product } from "./model/product/Product";
import { UberAuto } from "./model/product/UberAuto";
import { UberGo } from "./model/product/UberGo";
import { UberXL } from "./model/product/UberXL";
import { Rider } from "./model/Rider";
import { Vehicle } from "./model/Vehicle";
import { DriverRepository } from "./repository/DriverRepository";
import { FareRepository } from "./repository/FareRepository";
import { RideRepository } from "./repository/RideRepository";
import { RiderRepository } from "./repository/RiderRepository";
import { DriverMatchingService } from "./service/DriverMatchingService";
import { FareEstimationService } from "./service/FareEstimationService";
import { RideService } from "./service/RideService";
import { NearestDriverMatchingStrategy } from "./strategy/matching/NearestDriverMatchingStrategy";
import { NightBasedPricingStrategy } from "./strategy/pricing/NightBasedPricingStrategy";

(async function () {
  // Prerequisites
  const fareRepository = new FareRepository();
  const riderRepository = new RiderRepository();
  const driverRepository = new DriverRepository();
  const rideRepository = new RideRepository();
  const driverMatchingService = new DriverMatchingService(driverRepository, new NearestDriverMatchingStrategy());
  const vehicle1 = new Vehicle("VEH-AB-0007", [new UberGo(), new UberXL(), new UberAuto()]);
  const vehicle2 = new Vehicle("VEH-XY-0002", [new UberGo(), new UberXL(), new UberAuto()]);
  const rider1 = new Rider("rider_1", "Rider 1");
  const rider2 = new Rider("rider_2", "Rider 2");
  const driver1 = new Driver("driver_1", "Driver 1", vehicle1, 4.5, new Location(3, 3));
  const driver2 = new Driver("driver_2", "Driver 2", vehicle2, 4.7, new Location(4, 4));
  riderRepository.save(rider1);
  riderRepository.save(rider2);
  driverRepository.save(driver1);
  driverRepository.save(driver2);
  const rideService = new RideService(fareRepository, rideRepository, driverMatchingService);

  // --------------- DEMO 1: Fare Estimates ---------------
  console.log(`\n====== Fare Estimates ======`);
  const src = new Location(0, 0);
  const dest = new Location(1, 1);
  const products: Product[] = [new UberGo(), new UberXL(), new UberAuto()];
  const fareEstimationService = new FareEstimationService(fareRepository, new NightBasedPricingStrategy());
  const estimates = fareEstimationService.getFareEstimates(src, dest, products);
  estimates.forEach((estimate, product) => console.log(`Product: ${product.getType()} - Estimate: ${estimate}`));

  // --------------- DEMO 2: Booking within TTL ---------------
  console.log(`\n====== Booking a ride within TTL ======`);
  const fareWithinTTL = fareEstimationService.createFare(src, dest, new UberGo(), "rider_1");
  console.log(`Fare created with estimate: ${fareWithinTTL.getEstimatedFare()}`);

  try {
    const ride = await rideService.requestRide(fareWithinTTL.getId(), new UberGo(), src, dest, rider1);
    console.log(`Ride created! Driver: ${ride.getDriver().getId()}, Vehicle: ${ride.getVehicle().getNumberPlate()}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  // --------------- DEMO 3: Booking after TTL ---------------
  // console.log(`\n====== Booking a ride after TTL ======`);
  // const fareAfterTTL = fareEstimationService.createFare(src, dest, new UberXL(), "rider_2");
  // console.log(`Fare created with estimate: ${fareAfterTTL.getEstimatedFare()}`);
  // await sleep(6000);

  // try {
  //   const ride = await rideService.requestRide(fareAfterTTL.getId(), new UberXL(), src, dest, rider2);
  //   console.log(`Ride created! Driver: ${ride.getDriver().getId()}, Vehicle: ${ride.getVehicle().getNumberPlate()}`);
  // } catch (error) {
  //   console.log(`Error: ${error}`);
  // }

  // --------------- DEMO 4: 2 Riders Compete for 1 Driver ---------------
  console.log(`\n====== Two riders compete for a driver ======`);
  const fare1 = fareEstimationService.createFare(src, dest, new UberXL(), "rider_1");
  const fare2 = fareEstimationService.createFare(src, dest, new UberXL(), "rider_2");

  // TODO: Run these inside two threads to reproduce concurrency because setTimeout is running serially
  setTimeout(async () => {
    try {
      const ride = await rideService.requestRide(fare1.getId(), new UberXL(), src, dest, rider1);
      console.log(
        `Rider 1 booked ride! Driver: ${ride.getDriver().getId()}, Vehicle: ${ride.getVehicle().getNumberPlate()}`,
      );
    } catch (error) {
      console.log(`Rider 1 failed with error: ${error}`);
    }
  }, 0);

  setTimeout(async () => {
    try {
      const ride = await rideService.requestRide(fare2.getId(), new UberXL(), src, dest, rider2);
      console.log(
        `Rider 2 booked ride! Driver: ${ride.getDriver().getId()}, Vehicle: ${ride.getVehicle().getNumberPlate()}`,
      );
    } catch (error) {
      console.log(`Rider 2 failed with error: ${error}`);
    }
  }, 0);
})();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
