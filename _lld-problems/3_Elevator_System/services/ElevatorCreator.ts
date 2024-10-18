import { NUM_OF_ELEVATORS } from "../constants/constants";
import { ElevatorCar } from "../models/ElevatorCar";
import { ElevatorController } from "./ElevatorController";

export class ElevatorCreator {
  // https://www.geeksforgeeks.org/static-keyword-java/
  static elevatorControllers: ElevatorController[] = [];

  static {
    // Create elevators with their controller
    for (let i = 1; i <= NUM_OF_ELEVATORS; i++) {
      const elevatorCar: ElevatorCar = new ElevatorCar(i);
      const controller = new ElevatorController(elevatorCar);
      this.elevatorControllers.push(controller);
    }
  }
}
