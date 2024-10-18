import { Direction, Status } from "../constants/constants";
import { Display } from "./Display";
import { ElevatorDoor } from "./ElevatorDoor";
import { InternalButtons } from "./InternalButtons";

export class ElevatorCar {
  private _elevatorId: number;
  private _currentFloor: number;
  private _dir: Direction;
  private _display: Display;
  private _status: Status;
  private _internalButtons: InternalButtons;
  private _door: ElevatorDoor;

  constructor(elevatorId: number) {
    this._elevatorId = elevatorId;
    this._currentFloor = 1;
    this._dir = Direction.UP;
    this._display = new Display(this._currentFloor, this._dir);
    this._status = Status.IDLE;
    this._internalButtons = new InternalButtons();
    this._door = new ElevatorDoor();
  }

  public get elevatorId(): number {
    return this._elevatorId;
  }
  public get currentFloor(): number {
    return this._currentFloor;
  }
  public get dir(): Direction {
    return this._dir;
  }
  public get status(): Status {
    return this._status;
  }

  public set currentFloor(currentFloor: number) {
    this._currentFloor = currentFloor;
  }
  public set dir(dir: Direction) {
    this._dir = dir;
  }
  public set status(status: Status) {
    this._status = status;
  }

  public showDisplay(): void {
    this._display.showDisplay(this);
  }

  public setDisplay(): void {
    this._display.setDisplay(this._currentFloor, this._dir);
  }

  public pressButton(destFloor: number): void {
    this._internalButtons.pressButton(destFloor, this);
  }

  public moveElevator(destFloor: number, dir: Direction): boolean {
    let startFloor = this._currentFloor;

    if (dir === Direction.UP) {
      console.log("\n");
      for (let i = startFloor; i <= destFloor; i++) {
        this._currentFloor = i;
        this._dir = Direction.UP;

        this.setDisplay();
        this.showDisplay();
        this.status = Status.MOVING;
      }
      this.status = Status.IDLE;
      this.showDisplay();
      this._door.openDoor();
      this._door.closeDoor();
      return true;
    }

    if (dir === Direction.DOWN) {
      console.log("\n");
      for (let i = startFloor; i >= destFloor; i--) {
        this._currentFloor = i;
        this._dir = Direction.DOWN;

        this.setDisplay();
        this.showDisplay();
        this.status = Status.MOVING;
      }
      this.status = Status.IDLE;
      this.showDisplay();
      this._door.openDoor();
      this._door.closeDoor();
      return true;
    }

    return false;
  }
}
