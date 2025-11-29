import { HOURLY_2W_RATE } from "../constants/constants";
import { ParkingSpot } from "./ParkingSpot";

export class TwoWheelerSpot extends ParkingSpot {
  constructor(id: number) {
    super(id, HOURLY_2W_RATE);
  }
}
