import { ExitPoint } from "../models/ExitPoint";

export class ExitPointManager {
  private _exits: ExitPoint[] = [];

  constructor(exits: ExitPoint[]) {
    this._exits = exits;
  }

  public get exits(): ExitPoint[] {
    return this._exits;
  }

  public addExit(exit: ExitPoint) {
    this._exits.push(exit);
  }

  public removeExit(exit: ExitPoint) {
    this._exits = this._exits.filter((e) => e.id !== exit.id);
  }
}
