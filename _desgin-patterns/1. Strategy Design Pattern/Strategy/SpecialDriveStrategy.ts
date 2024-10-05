import { DriveStrategy } from "./DriveStrategy";

export class SpecialDriveStrategy implements DriveStrategy {
  drive(): void {
    console.log("Special Drive Capability");
  }
}
