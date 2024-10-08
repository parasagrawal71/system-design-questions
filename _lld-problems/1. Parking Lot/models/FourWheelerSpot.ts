import { HOURLY_4W_RATE } from "../constants/constants";
import { ParkingSpot } from "./ParkingSpot";

export class FourWheelerSpot extends ParkingSpot {
  constructor(id: number) {
    super(id, HOURLY_4W_RATE);
  }
}
