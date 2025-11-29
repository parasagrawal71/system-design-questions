import { Floor } from "./Floor";

export class Building {
  private _floors: Floor[] = [];

  constructor(floors: Floor[]) {
    this._floors = floors;
  }

  public addFloor(floor: Floor) {
    this._floors.push(floor);
  }

  public removeFloor(floor: Floor) {
    this._floors = this._floors.filter((f) => f.floorNo !== floor.floorNo);
  }

  public get floors(): Floor[] {
    return this._floors;
  }
}
