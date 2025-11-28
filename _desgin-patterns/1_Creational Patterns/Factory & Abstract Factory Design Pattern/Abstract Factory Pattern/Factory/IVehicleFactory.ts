import { IVehicle } from "../Object/IVehicle";

export interface IVehicleFactory {
  getVehicle(vehicleType: string): IVehicle;
}
