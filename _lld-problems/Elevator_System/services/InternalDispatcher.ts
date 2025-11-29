import { ElevatorCar } from "../models/ElevatorCar";
import { ElevatorController } from "./ElevatorController";
import { ElevatorCreator } from "./ElevatorCreator";

export class InternalDispatcher {
  elevatorControllers: ElevatorController[] = ElevatorCreator.elevatorControllers;

  public submitInternalRequest(floorNo: number, elevatorCar: ElevatorCar): void {
    for (const elevatorController of this.elevatorControllers) {
      if (elevatorController.elevator.elevatorId == elevatorCar.elevatorId) {
        elevatorController.submitInternalRequest(floorNo);
      }
    }
  }
}
