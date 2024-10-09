import { PARKING_LOT_2W_SIZE, PARKING_LOT_4W_SIZE, VEHICLE_TYPE } from "./constants/constants";
import { FourWheelerSpot } from "./models/FourWheelerSpot";
import { ParkingSpot } from "./models/ParkingSpot";
import { Ticket } from "./models/Ticket";
import { TwoWheelerSpot } from "./models/TwoWheelerSpot";
import { Vehicle } from "./models/Vehicle";
import { CostComputationFactory } from "./services/CostComputationFactory";
import { ParkingManagerFactory } from "./services/ParkingManagerFactory";
import { ParkingManager } from "./services/ParkingManager";
import { TicketManager } from "./services/TicketManager";

(function () {
  console.log("Parking Lot");

  // Usage of getters & setters in TypeScript
  //   const v = new Vehicle("1", "CAR");
  //   console.log(v.vehicleNo);
  //   console.log(v.vehicleType);
  //   v.vehicleNo = "2";
  //   v.vehicleType = "BIKE";
  //   console.log(v.vehicleNo);
  //   console.log(v.vehicleType);
  //   console.log("*******************");
  //   console.log(v.vehicleNo()); ❌
  // Reference: https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/

  const pmFactory = new ParkingManagerFactory();
  const fourWheelerManager: ParkingManager = pmFactory.getManager(VEHICLE_TYPE.FOUR_WHEELER);
  const twoWheelerManager: ParkingManager = pmFactory.getManager(VEHICLE_TYPE.TWO_WHEELER);
  const ticketManager: TicketManager = new TicketManager();

  console.log("\n**************** Admin Config ****************");
  init(fourWheelerManager, twoWheelerManager);

  console.log("\n**************** Entrance Gate ****************");
  entranceGate(fourWheelerManager, twoWheelerManager, ticketManager);

  console.log("\n**************** Exit Gate ****************");
  exitGate(fourWheelerManager, twoWheelerManager, ticketManager);

  console.log("\nThank you for using our parking service");
})();

function init(fourWheelerManager: ParkingManager, twoWheelerManager: ParkingManager) {
  /**
   * - Add total 10 parking spaces - 6 for 4W and 4 for 2W
   */
  // Add 4W parking spaces
  for (let i = 1; i <= PARKING_LOT_4W_SIZE; i++) {
    fourWheelerManager.addParkingSpot(new FourWheelerSpot(i));
  }

  // Add 2W parking spaces
  for (let i = 1; i <= PARKING_LOT_2W_SIZE; i++) {
    twoWheelerManager.addParkingSpot(new TwoWheelerSpot(i));
  }

  // Print parking spaces
  console.log("\nFour Wheeler Spaces: ", fourWheelerManager.getSpots());
  console.log("Two Wheeler Spaces: ", twoWheelerManager.getSpots());

  // // Remove a parking spot which is under maintenance
  // fourWheelerManager.removeParkingSpot(fourWheelerManager.getSpots()[0]);
  // console.log("Four Wheeler Spaces: ", fourWheelerManager.getSpots());
}

function entranceGate(
  fourWheelerManager: ParkingManager,
  twoWheelerManager: ParkingManager,
  ticketManager: TicketManager,
) {
  // Incoming four wheeler
  const spot: ParkingSpot | null = fourWheelerManager.getAvailableSpot(); // Pass entranceGateNo for parking strategy if required
  if (!spot) {
    console.log("\nSorry, parking space is not available for 4 Wheeler");
  } else {
    // Park the vehicle
    const vehicle = new Vehicle("4W_1", VEHICLE_TYPE.FOUR_WHEELER);
    fourWheelerManager.parkVehicle(spot, vehicle);
    console.log("\nVehicle is parked at spot ", spot.id);

    // Generate a ticket
    ticketManager.createTicket(spot, vehicle);
    console.log("Ticket is created for ", vehicle.vehicleNo);
  }

  // Incoming two wheeler
  const spot2W: ParkingSpot | null = twoWheelerManager.getAvailableSpot(); // Pass entranceGateNo for parking strategy if required
  if (!spot2W) {
    console.log("\nSorry, parking space is not available for 2 Wheeler");
  } else {
    // Park the vehicle
    const vehicle = new Vehicle("2W_1", VEHICLE_TYPE.TWO_WHEELER);
    twoWheelerManager.parkVehicle(spot2W, vehicle);
    console.log("\nVehicle is parked at spot ", spot2W.id);

    // Generate a ticket
    ticketManager.createTicket(spot2W, vehicle);
    console.log("Ticket is created for ", vehicle.vehicleNo);
  }

  // console.log(ticketManager.getTickets());
}

function exitGate(fourWheelerManager: ParkingManager, twoWheelerManager: ParkingManager, ticketManager: TicketManager) {
  const vehicle = new Vehicle("4W_1", VEHICLE_TYPE.FOUR_WHEELER);

  // Find ticket
  const ticket: Ticket | null = ticketManager.getTicket(vehicle);
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
  fourWheelerManager.removeVehicle(ticket.parkingSpot);
  console.log(`\nParking spot ${ticket.parkingSpot.id} is cleared`);
  console.log(fourWheelerManager.getSpots().find((s) => s.id === ticket.parkingSpot.id));
}
