export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
}

export enum Status {
  IDLE = "IDLE",
  MOVING = "MOVING",
}

export function isOdd(num: number) {
  return num % 2 !== 0;
}

export function isEven(num: number) {
  return num % 2 === 0;
}

export const NUM_OF_FLOORS = 5;
export const NUM_OF_ELEVATORS = 4;
