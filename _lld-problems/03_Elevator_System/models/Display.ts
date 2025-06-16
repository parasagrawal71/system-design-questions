import { Direction } from "../constants/constants";
import { ElevatorCar } from "./ElevatorCar";

export class Display {
  private _floor: number;
  private _dir: Direction;

  constructor(floor: number, dir: Direction) {
    this._floor = floor;
    this._dir = dir;
  }

  public get floor(): number {
    return this._floor;
  }

  public get dir(): Direction {
    return this._dir;
  }

  public showDisplay(elevatorCar: ElevatorCar): void {
    console.log(
      `Elevator ${elevatorCar.elevatorId} (${elevatorCar.status}):\n\tFloor: ${this._floor} Direction: ${this._dir}`,
    );
  }

  public setDisplay(floor: number, dir: Direction): void {
    this._floor = floor;
    this._dir = dir;
  }
}
