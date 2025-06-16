import { VEHICLE_TYPE } from "./constants/constants";
import { EntranceGateController } from "./controllers/EntranceGateController";
import { ExitGateController } from "./controllers/ExitGateController";
import { Init } from "./controllers/Init";
import { EntryPoint } from "./models/EntryPoint";
import { ExitPoint } from "./models/ExitPoint";
import { EntryPointManager } from "./services/EntryPointManager";
import { ExitPointManager } from "./services/ExitPointManager";
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
  const entryPointManager = new EntryPointManager([]);
  const exitPointManager = new ExitPointManager([]);

  new Init(fourWheelerManager, twoWheelerManager, entryPointManager, exitPointManager);

  new EntranceGateController(fourWheelerManager, twoWheelerManager, ticketManager, entryPointManager);

  new ExitGateController(fourWheelerManager, twoWheelerManager, ticketManager);
})();
