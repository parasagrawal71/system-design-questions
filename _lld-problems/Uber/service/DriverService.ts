import { Driver } from "../model/Driver";
import { Location } from "../model/Location";
import { DriverRepository } from "../repository/DriverRepository";

export class DriverService {
  //   private readonly driverRepository: DriverRepository;
  //   constructor() {
  //     this.driverRepository = new DriverRepository();
  //   } // <-- Its shortcut 👇🏼

  constructor(private readonly driverRepository: DriverRepository) {}

  registerDriver(driver: Driver): void {
    this.driverRepository.save(driver);
  }

  updateLocation(driverId: string, location: Location): void {
    const driver = this.driverRepository.getById(driverId);
    if (!driver) {
      throw new Error("Driver not found with id: " + driverId);
    }
    driver.setCurrentLocation(location);
  }
}
