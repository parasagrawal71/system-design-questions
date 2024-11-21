import { IVehicle } from "../Object/IVehicle";
import { OrdinaryVehicle1 } from "../Object/OrdinaryVehicle1";
import { OrdinaryVehicle2 } from "../Object/OrdinaryVehicle2";
import { IVehicleFactory } from "./IVehicleFactory";

export class OrdinaryVehicleFactory implements IVehicleFactory {
  getVehicle(vehicleType: string): IVehicle {
    switch (vehicleType) {
      case "ORDINARY_VEHICLE_1":
        return new OrdinaryVehicle1();
      case "ORDINARY_VEHICLE_2":
        return new OrdinaryVehicle2();
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}
