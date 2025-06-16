import { ENTRY_POINTS, EXIT_POINTS, PARKING_LOT_2W_SIZE, PARKING_LOT_4W_SIZE } from "../constants/constants";
import { EntryPoint } from "../models/EntryPoint";
import { ExitPoint } from "../models/ExitPoint";
import { FourWheelerSpot } from "../models/FourWheelerSpot";
import { TwoWheelerSpot } from "../models/TwoWheelerSpot";
import { EntryPointManager } from "../services/EntryPointManager";
import { ExitPointManager } from "../services/ExitPointManager";
import { ParkingManager } from "../services/ParkingManager";

export class Init {
  private _fourWheelerManager: ParkingManager;
  private _twoWheelerManager: ParkingManager;
  private _entryPointManager: EntryPointManager;
  private _exitPointManager: ExitPointManager;

  constructor(
    fourWheelerManager: ParkingManager,
    twoWheelerManager: ParkingManager,
    entryPointManager: EntryPointManager,
    exitPointManager: ExitPointManager,
  ) {
    this._fourWheelerManager = fourWheelerManager;
    this._twoWheelerManager = twoWheelerManager;
    this._entryPointManager = entryPointManager;
    this._exitPointManager = exitPointManager;

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

    for (let i = 1; i <= ENTRY_POINTS; i++) {
      const entryPoint = new EntryPoint(i);
      this._entryPointManager.addEntry(entryPoint);
    }

    for (let i = 1; i <= EXIT_POINTS; i++) {
      const exitPoint = new ExitPoint(i);
      this._exitPointManager.addExit(exitPoint);
    }

    // Print parking spaces
    console.log("\nFour Wheeler Spaces: ", this._fourWheelerManager.getSpots());
    console.log("Two Wheeler Spaces: ", this._twoWheelerManager.getSpots());
    console.log("Entrances: ", this._entryPointManager.entrances);
    console.log("Exits: ", this._exitPointManager.exits);

    // // Remove a parking spot which is under maintenance
    // this._fourWheelerManager.removeParkingSpot(this._fourWheelerManager.getSpots()[0]);
    // console.log("Four Wheeler Spaces: ", this._fourWheelerManager.getSpots());
  }
}
