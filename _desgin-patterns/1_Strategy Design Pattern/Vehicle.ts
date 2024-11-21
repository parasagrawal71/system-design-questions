import { IDriveStrategy } from "./Strategy/IDriveStrategy";

export class Vehicle {
  driveObject: IDriveStrategy;

  constructor(driveObj: IDriveStrategy) {
    this.driveObject = driveObj;
  }
  drive() {
    this.driveObject.drive();
  }
}
