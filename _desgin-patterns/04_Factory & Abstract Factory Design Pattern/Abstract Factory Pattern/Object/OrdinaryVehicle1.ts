import { IVehicle } from "./IVehicle";

export class OrdinaryVehicle1 implements IVehicle {
  average(): void {
    console.log("Ordinary Vehicle 1");
  }
}
