import { VEHICLE_TYPE } from "../constants/constants";
import { EntryPoint } from "../models/EntryPoint";
import { ParkingSpot } from "../models/ParkingSpot";
import { Vehicle } from "../models/Vehicle";
import { EntryPointManager } from "../services/EntryPointManager";
import { ParkingManager } from "../services/ParkingManager";
import { TicketManager } from "../services/TicketManager";

export class EntranceGateController {
  private _fourWheelerManager: ParkingManager;
  private _twoWheelerManager: ParkingManager;
  private _ticketManager: TicketManager;
  private _entryPointManager: EntryPointManager;

  constructor(
    fourWheelerManager: ParkingManager,
    twoWheelerManager: ParkingManager,
    ticketManager: TicketManager,
    entryPointManager: EntryPointManager,
  ) {
    this._fourWheelerManager = fourWheelerManager;
    this._twoWheelerManager = twoWheelerManager;
    this._ticketManager = ticketManager;
    this._entryPointManager = entryPointManager;

    this.run();
  }

  run() {
    const entryPoint = this._entryPointManager.entrances[1];
    console.log("\nEntrance: ", entryPoint.id);

    // Incoming four wheeler
    const spot: ParkingSpot | null = this._fourWheelerManager.getAvailableSpot(entryPoint); // Pass entranceGateNo for parking strategy if required
    if (!spot) {
      console.log("\nSorry, parking space is not available for 4 Wheeler");
    } else {
      // Park the vehicle
      const vehicle = new Vehicle("4W_1", VEHICLE_TYPE.FOUR_WHEELER);
      this._fourWheelerManager.parkVehicle(spot, vehicle);
      console.log("\nVehicle is parked at spot ", spot.id);

      // Generate a ticket
      this._ticketManager.createTicket(spot, vehicle, entryPoint);
      console.log("Ticket is created for ", vehicle.vehicleNo);
    }

    // Incoming two wheeler
    const spot2W: ParkingSpot | null = this._twoWheelerManager.getAvailableSpot(entryPoint); // Pass entranceGateNo for parking strategy if required
    if (!spot2W) {
      console.log("\nSorry, parking space is not available for 2 Wheeler");
    } else {
      // Park the vehicle
      const vehicle = new Vehicle("2W_1", VEHICLE_TYPE.TWO_WHEELER);
      this._twoWheelerManager.parkVehicle(spot2W, vehicle);
      console.log("\nVehicle is parked at spot ", spot2W.id);

      // Generate a ticket
      this._ticketManager.createTicket(spot2W, vehicle, entryPoint);
      console.log("Ticket is created for ", vehicle.vehicleNo);
    }

    // console.log(this._ticketManager.getTickets());
  }
}
