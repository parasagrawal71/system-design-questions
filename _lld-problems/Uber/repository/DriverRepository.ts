import { Driver } from "../model/Driver";
import { Location } from "../model/Location";

export class DriverRepository {
  private drivers = new Map<string, Driver>();

  save(driver: Driver): void {
    this.drivers.set(driver.getId(), driver);
  }

  getById(id: string): Driver | undefined {
    return this.drivers.get(id);
  }

  getNearbyDrivers(src: Location, radius: number): Driver[] {
    const filteredDrivers: Driver[] = [];
    this.drivers.forEach((driver, driverId) => {
      if (driver.isAvailable() && driver.getCurrLocation() && src.distanceTo(driver.getCurrLocation()!) <= radius) {
        filteredDrivers.push(driver);
      }
    });
    return filteredDrivers;
  }
}
