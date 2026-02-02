import { Driver } from "../../model/Driver";
import { Location } from "../../model/Location";

export interface IDriverMatchingStrategy {
  findDriver(src: Location, availableDrivers: Driver[]): Driver;
}
