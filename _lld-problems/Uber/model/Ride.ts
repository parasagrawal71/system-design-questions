import { RideStatus } from "../enums/RideStatus";
import { Driver } from "./Driver";
import { Location } from "./Location";
import { Product } from "./product/Product";
import { Rider } from "./Rider";
import { Vehicle } from "./Vehicle";

export class Ride {
  private id: string;
  private src: Location;
  private dest: Location;
  private product: Product;
  private rider: Rider;
  private driver: Driver;
  private vehicle: Vehicle;
  private status: RideStatus = RideStatus.CREATED;

  constructor(src: Location, dest: Location, product: Product, rider: Rider, driver: Driver, vehicle: Vehicle) {
    this.id = Math.random().toString(); // OR, Date.now().toString()
    this.src = src;
    this.dest = dest;
    this.product = product;
    this.rider = rider;
    this.driver = driver;
    this.vehicle = vehicle;
  }

  // getters
  getId(): string {
    return this.id;
  }

  getDriver(): Driver {
    return this.driver;
  }

  getVehicle(): Vehicle {
    return this.vehicle;
  }

  getStatus(): RideStatus {
    return this.status;
  }

  // setters
  setStatus(status: RideStatus) {
    this.status = status;
  }
}
