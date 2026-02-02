import { Driver } from "../../model/Driver";
import { Location } from "../../model/Location";
import { IDriverMatchingStrategy } from "./IDriverMatchingStrategy";

export class HighestRatedDriverMatchingStrategy implements IDriverMatchingStrategy {
  findDriver(src: Location, availableDrivers: Driver[]): Driver {
    availableDrivers.sort((a, b) => b.getRating() - a.getRating());
    return availableDrivers[0];
  }
}
