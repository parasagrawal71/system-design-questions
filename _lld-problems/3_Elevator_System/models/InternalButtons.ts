import { InternalDispatcher } from "../services/InternalDispatcher";
import { ElevatorCar } from "./ElevatorCar";

export class InternalButtons {
  private _internalDispatcher: InternalDispatcher;

  constructor() {
    this._internalDispatcher = new InternalDispatcher();
  }

  public pressButton(destFloor: number, elevatorCar: ElevatorCar): void {
    this._internalDispatcher.submitInternalRequest(destFloor, elevatorCar);
  }
}
