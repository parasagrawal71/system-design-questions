import { PARKING_LOT_2W_SIZE, PARKING_LOT_4W_SIZE } from "../constants/constants";
import { FourWheelerSpot } from "../models/FourWheelerSpot";
import { TwoWheelerSpot } from "../models/TwoWheelerSpot";
import { ParkingManager } from "../services/ParkingManager";

export class Init {
  private _fourWheelerManager: ParkingManager;
  private _twoWheelerManager: ParkingManager;

  constructor(fourWheelerManager: ParkingManager, twoWheelerManager: ParkingManager) {
    this._fourWheelerManager = fourWheelerManager;
    this._twoWheelerManager = twoWheelerManager;

    this.init();
  }

  init() {
    // Add total 10 parking spaces - 6 for 4W and 4 for 2W
    // Add 4W parking spaces
    for (let i = 1; i <= PARKING_LOT_4W_SIZE; i++) {
      this._fourWheelerManager.addParkingSpot(new FourWheelerSpot(i));
    }

    // Add 2W parking spaces
    for (let i = 1; i <= PARKING_LOT_2W_SIZE; i++) {
      this._twoWheelerManager.addParkingSpot(new TwoWheelerSpot(i));
    }

    // Print parking spaces
    console.log("\nFour Wheeler Spaces: ", this._fourWheelerManager.getSpots());
    console.log("Two Wheeler Spaces: ", this._twoWheelerManager.getSpots());

    // // Remove a parking spot which is under maintenance
    // this._fourWheelerManager.removeParkingSpot(this._fourWheelerManager.getSpots()[0]);
    // console.log("Four Wheeler Spaces: ", this._fourWheelerManager.getSpots());
  }
}
