import { Direction, NUM_OF_FLOORS } from "./constants/constants";
import { Building } from "./models/Building";
import { ExternalButtons } from "./models/ExternalButtons";
import { Floor } from "./models/Floor";
import { InternalButtons } from "./models/InternalButtons";
import { ElevatorController } from "./services/ElevatorController";
import { ElevatorCreator } from "./services/ElevatorCreator";

(function () {
  // Create a building with floors
  const building = new Building([]);
  for (let i = 1; i <= NUM_OF_FLOORS; i++) {
    building.addFloor(new Floor(i));
  }
  console.log(`Building with ${building.floors.length} floors`);

  // Available elevators
  console.log(`\n`);
  const elevatorControllers: ElevatorController[] = ElevatorCreator.elevatorControllers;
  for (const controller of elevatorControllers) {
    const elevator = controller.elevator;
    elevator.showDisplay();
  }

  // Users request an elevator on floor 2
  console.log(`\n`);
  const externalButtons = new ExternalButtons();
  externalButtons.pressButton(2, Direction.UP);
  //   externalButtons.pressButton(4, Direction.UP);

  // User requests to go UP from floor 2 to floor 5
  const internalButtons = new InternalButtons();
  internalButtons.pressButton(5, elevatorControllers[1].elevator);
})();
