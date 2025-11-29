import { MaxPriorityQueue, MinPriorityQueue } from "@datastructures-js/priority-queue";
import { ElevatorCar } from "../models/ElevatorCar";
import { Direction } from "../constants/constants";

export class ElevatorController {
  upMinPQ = new MinPriorityQueue<number>();
  downMaxPQ = new MaxPriorityQueue<number>();
  pendingRequests: number[] = [];
  elevatorCar: ElevatorCar;

  constructor(elevatorCar: ElevatorCar) {
    this.elevatorCar = elevatorCar;
  }

  public get elevator(): ElevatorCar {
    return this.elevatorCar;
  }

  public submitExternalRequest(floorNo: number, direction: Direction): void {
    if (direction == Direction.DOWN) {
      if (floorNo > this.elevatorCar.currentFloor) {
        this.pendingRequests.push(floorNo);
      } else {
        this.downMaxPQ.push(floorNo);
      }
    } else {
      if (floorNo < this.elevatorCar.currentFloor) {
        this.pendingRequests.push(floorNo);
      } else {
        this.upMinPQ.push(floorNo);
      }
    }
    this.controlElevator();
  }

  public controlElevator(): void {
    while (this.upMinPQ.size() || this.downMaxPQ.size()) {
      if (this.elevator.dir == Direction.UP) {
        while (this.upMinPQ.size()) {
          this.elevator.moveElevator(this.upMinPQ.front(), Direction.UP);
          this.upMinPQ.pop();
        }

        while (this.pendingRequests.length) {
          const requestedFloor = this.pendingRequests.pop();
          requestedFloor && this.upMinPQ.push(requestedFloor);
        }

        this.elevator.dir = Direction.DOWN;
        this.elevator.setDisplay();
      }

      if (this.elevator.dir == Direction.DOWN) {
        while (this.downMaxPQ.size()) {
          this.elevator.moveElevator(this.downMaxPQ.front(), Direction.DOWN);
          this.downMaxPQ.pop();
        }

        while (this.pendingRequests.length) {
          const requestedFloor = this.pendingRequests.pop();
          requestedFloor && this.downMaxPQ.push(requestedFloor);
        }

        this.elevator.dir = Direction.UP;
        this.elevator.setDisplay();
      }
    }
  }

  public submitInternalRequest(floorNo: number): void {
    if (this.elevatorCar.dir == Direction.DOWN) {
      if (floorNo > this.elevatorCar.currentFloor) {
        this.pendingRequests.push(floorNo);
      } else {
        this.downMaxPQ.push(floorNo);
      }
    } else {
      if (floorNo < this.elevatorCar.currentFloor) {
        this.pendingRequests.push(floorNo);
      } else {
        this.upMinPQ.push(floorNo);
      }
    }
    this.controlElevator();
  }
}
