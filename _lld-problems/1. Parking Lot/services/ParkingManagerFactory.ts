import { VEHICLE_TYPE } from "../constants/constants";
import { FourWheelerManager } from "./FourWheelerManager";
import { ParkingManager } from "./ParkingManager";
import { TwoWheelerManager } from "./TwoWheelerManager";

export class ParkingManagerFactory {
  public getManager(type: VEHICLE_TYPE): ParkingManager {
    switch (type) {
      case VEHICLE_TYPE.FOUR_WHEELER:
        return new FourWheelerManager([]);
      case VEHICLE_TYPE.TWO_WHEELER:
        return new TwoWheelerManager([]);
      default:
        throw new Error("Invalid parking manager type");
    }
  }
}
