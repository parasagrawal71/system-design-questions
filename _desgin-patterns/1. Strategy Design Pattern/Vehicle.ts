import { IDriveStrategy } from "./Strategy/DriveStrategy";

export class Vehicle {
  driveObject: IDriveStrategy;

  constructor(driveObj: IDriveStrategy) {
    this.driveObject = driveObj;
  }
  drive() {
    this.driveObject.drive();
  }
}
