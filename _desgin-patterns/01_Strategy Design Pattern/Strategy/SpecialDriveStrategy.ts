import { IDriveStrategy } from "./IDriveStrategy";

export class SpecialDriveStrategy implements IDriveStrategy {
  drive(): void {
    console.log("Special Drive Capability");
  }
}
