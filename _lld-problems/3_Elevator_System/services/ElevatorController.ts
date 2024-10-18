import { MaxPriorityQueue, MinPriorityQueue } from "@datastructures-js/priority-queue";
import { ElevatorCar } from "../models/ElevatorCar";
import { Direction } from "../constants/constants";

export class ElevatorController {
  upMinPQ = new MinPriorityQueue<number>();
  downMaxPQ = new MaxPriorityQueue<number>();
  elevatorCar: ElevatorCar;

  constructor(elevatorCar: ElevatorCar) {
    this.elevatorCar = elevatorCar;
  }

  public get elevator(): ElevatorCar {
    return this.elevatorCar;
  }

  public submitExternalRequest(floorNo: number, direction: Direction): void {
    if (direction == Direction.DOWN) {
      this.downMaxPQ.push(floorNo);
    } else {
      this.upMinPQ.push(floorNo);
    }
    this.controlElevator();
  }

  public controlElevator(): void {
    if (this.elevator.dir == Direction.UP) {
      while (this.upMinPQ.size()) {
        this.elevator.moveElevator(this.upMinPQ.front(), Direction.UP);
        this.upMinPQ.pop();
      }
    }

    if (this.elevator.dir == Direction.DOWN) {
      while (this.downMaxPQ.size()) {
        this.elevator.moveElevator(this.downMaxPQ.front(), Direction.DOWN);
        this.downMaxPQ.pop();
      }
    }
  }

  public submitInternalRequest(floorNo: number): void {
    if (this.elevator.dir == Direction.DOWN) {
      this.downMaxPQ.push(floorNo);
    } else {
      this.upMinPQ.push(floorNo);
    }
    this.controlElevator();
  }
}
