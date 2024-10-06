import { IVehicleFactory } from "./Factory/IVehicleFactory";
import { LuxuryVehicleFactory } from "./Factory/LuxuryVehicleFactory";
import { IVehicle } from "./Object/IVehicle";

(function main() {
  const luxuryVehicleFactory: IVehicleFactory = new LuxuryVehicleFactory();
  const luxuryVehicle: IVehicle = luxuryVehicleFactory.getVehicle("LUXURY_VEHICLE_1");
  luxuryVehicle.average();

  luxuryVehicleFactory.getVehicle("LUXURY_VEHICLE_2").average();
})();
