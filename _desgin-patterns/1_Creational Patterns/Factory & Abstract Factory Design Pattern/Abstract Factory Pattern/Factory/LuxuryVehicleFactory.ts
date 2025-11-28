import { IVehicle } from "../Object/IVehicle";
import { LuxuryVehicle1 } from "../Object/LuxuryVehicle1";
import { LuxuryVehicle2 } from "../Object/LuxuryVehicle2";
import { IVehicleFactory } from "./IVehicleFactory";

export class LuxuryVehicleFactory implements IVehicleFactory {
  getVehicle(vehicleType: string): IVehicle {
    switch (vehicleType) {
      case "LUXURY_VEHICLE_1":
        return new LuxuryVehicle1();
      case "LUXURY_VEHICLE_2":
        return new LuxuryVehicle2();
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}
