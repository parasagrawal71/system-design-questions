import { DriveStrategy } from "./Strategy/DriveStrategy";

export class Vehicle {
  driveObject: DriveStrategy;

  constructor(driveObj: DriveStrategy) {
    this.driveObject = driveObj;
  }
  drive() {
    this.driveObject.drive();
  }
}
