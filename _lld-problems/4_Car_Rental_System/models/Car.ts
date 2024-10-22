import { VEHICLE_TYPE } from "../constants/constants";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  constructor() {
    super(VEHICLE_TYPE.CAR);
  }
}
