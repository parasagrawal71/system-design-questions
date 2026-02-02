import { Location } from "./Location";
import { Vehicle } from "./Vehicle";

export class Driver {
  private id: string;
  private name: string;
  private currLocation: Location;
  private available: boolean = true;
  private vehicle: Vehicle;
  private rating: number;

  constructor(id: string, name: string, vehicle: Vehicle, rating: number, location: Location) {
    this.id = id;
    this.name = name;
    this.vehicle = vehicle;
    this.rating = rating;
    this.currLocation = location;
  }

  // Getters and setters
  getId(): string {
    return this.id;
  }

  getCurrLocation(): Location {
    return this.currLocation;
  }

  getRating(): number {
    return this.rating;
  }

  getVehicle(): Vehicle {
    return this.vehicle;
  }

  setCurrentLocation(location: Location) {
    this.currLocation = location;
  }

  isAvailable() {
    return this.available;
  }

  markUnavailable(): void {
    this.available = false;
  }

  markAvailable(): void {
    this.available = true;
  }
}
