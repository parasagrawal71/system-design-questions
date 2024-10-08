import { VEHICLE_TYPE } from "../constants/constants";
import { CostComputation } from "./CostComputation";
import { CostComputation2W } from "./CostComputation2W";
import { CostComputation4W } from "./CostComputation4W";

export class CostComputationFactory {
  public getCostComputation(type: VEHICLE_TYPE): CostComputation {
    switch (type) {
      case VEHICLE_TYPE.TWO_WHEELER:
        return new CostComputation2W();
      case VEHICLE_TYPE.FOUR_WHEELER:
        return new CostComputation4W();
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}
