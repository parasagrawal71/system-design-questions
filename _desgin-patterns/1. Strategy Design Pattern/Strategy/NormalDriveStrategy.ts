import { DriveStrategy } from "./DriveStrategy";

export class NormalDriveStrategy implements DriveStrategy {
  drive(): void {
    console.log("Normal Drive Capability");
  }
}
