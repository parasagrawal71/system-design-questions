import { IDriveStrategy } from "./DriveStrategy";

export class SpecialDriveStrategy implements IDriveStrategy {
  drive(): void {
    console.log("Special Drive Capability");
  }
}
