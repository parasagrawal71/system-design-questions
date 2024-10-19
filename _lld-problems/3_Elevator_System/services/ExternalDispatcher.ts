import { Direction, isEven, isOdd } from "../constants/constants";
import { ElevatorController } from "./ElevatorController";
import { ElevatorCreator } from "./ElevatorCreator";

export class ExternalDispatcher {
  elevatorControllers: ElevatorController[] = ElevatorCreator.elevatorControllers;

  public submitExternalRequest(floorNo: number, dir: Direction) {
    for (const elevatorController of this.elevatorControllers) {
      const elevatorId = elevatorController.elevator.elevatorId;

      // For simplicity, odd-even strategy
      if (isOdd(elevatorId) && isOdd(floorNo)) {
        elevatorController.submitExternalRequest(floorNo, dir);
        break;
      } else if (isEven(elevatorId) && isEven(floorNo)) {
        elevatorController.submitExternalRequest(floorNo, dir);
        break;
      }

      /**
       * TODO:
       * - Can Strategy Design Pattern be used here?
       * - Optimise the algorithm. Select idle elevator?, etc
       */
    }
  }
}
