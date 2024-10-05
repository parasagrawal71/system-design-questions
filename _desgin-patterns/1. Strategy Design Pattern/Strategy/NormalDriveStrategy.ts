import { IDriveStrategy } from "./DriveStrategy";

export class NormalDriveStrategy implements IDriveStrategy {
  drive(): void {
    console.log("Normal Drive Capability");
  }
}
