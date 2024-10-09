import { VEHICLE_TYPE } from "./constants/constants";
import { EntranceGate } from "./controllers/EntranceGate";
import { ExitGate } from "./controllers/ExitGate";
import { Init } from "./controllers/Init";
import { ParkingManager } from "./services/ParkingManager";
import { ParkingManagerFactory } from "./services/ParkingManagerFactory";
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

  new Init(fourWheelerManager, twoWheelerManager);

  new EntranceGate(fourWheelerManager, twoWheelerManager, ticketManager);

  new ExitGate(fourWheelerManager, twoWheelerManager, ticketManager);
})();
