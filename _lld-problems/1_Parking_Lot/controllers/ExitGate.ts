import { VEHICLE_TYPE } from "../constants/constants";
import { Ticket } from "../models/Ticket";
import { Vehicle } from "../models/Vehicle";
import { CostComputationFactory } from "../services/CostComputationFactory";
import { ParkingManager } from "../services/ParkingManager";
import { TicketManager } from "../services/TicketManager";

export class ExitGate {
  private _fourWheelerManager: ParkingManager;
  private _twoWheelerManager: ParkingManager;
  private _ticketManager: TicketManager;

  constructor(fourWheelerManager: ParkingManager, twoWheelerManager: ParkingManager, ticketManager: TicketManager) {
    this._fourWheelerManager = fourWheelerManager;
    this._twoWheelerManager = twoWheelerManager;
    this._ticketManager = ticketManager;

    this.run();
  }

  run() {
    const vehicle = new Vehicle("4W_1", VEHICLE_TYPE.FOUR_WHEELER);

    // Find ticket
    const ticket: Ticket | null = this._ticketManager.getTicket(vehicle);
    console.log("\nVehicle ticket: ", ticket);
    if (!ticket) {
      return "Ticket not found";
    }

    // Calculate Price
    const ccFactory = new CostComputationFactory();
    const twoWheelerCostComputation = ccFactory.getCostComputation(VEHICLE_TYPE.TWO_WHEELER);
    const fourWheelerCostComputation = ccFactory.getCostComputation(VEHICLE_TYPE.FOUR_WHEELER);
    const price: number = fourWheelerCostComputation.computePrice(ticket);
    console.log("\nPlease pay: Rs", price);

    // Payment
    console.log(`\nPayment made for ${vehicle.vehicleNo}`);

    // Clear the parking space
    this._fourWheelerManager.removeVehicle(ticket.parkingSpot);
    console.log(`\nParking spot ${ticket.parkingSpot.id} is cleared`);
    console.log(this._fourWheelerManager.getSpots().find((s) => s.id === ticket.parkingSpot.id));
  }
}
