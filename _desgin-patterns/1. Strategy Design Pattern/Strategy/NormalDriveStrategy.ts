import { IDriveStrategy } from "./IDriveStrategy";

export class NormalDriveStrategy implements IDriveStrategy {
  drive(): void {
    console.log("Normal Drive Capability");
  }
}
