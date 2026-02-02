import { Driver } from "../../model/Driver";
import { Location } from "../../model/Location";
import { IDriverMatchingStrategy } from "./IDriverMatchingStrategy";

export class NearestDriverMatchingStrategy implements IDriverMatchingStrategy {
  findDriver(src: Location, availableDrivers: Driver[]): Driver {
    availableDrivers.sort((a, b) => {
      const distanceA = src.distanceTo(a.getCurrLocation()!);
      const distanceB = src.distanceTo(b.getCurrLocation()!);
      return distanceA - distanceB;
    });
    return availableDrivers[0];
  }
}
