import { EntryPoint } from "../models/EntryPoint";

export class EntryPointManager {
  private _entrances: EntryPoint[] = [];

  constructor(entrances: EntryPoint[]) {
    this._entrances = entrances;
  }

  public get entrances(): EntryPoint[] {
    return this._entrances;
  }

  addEntry(entrance: EntryPoint) {
    this._entrances.push(entrance);
  }

  removeEntry(entrance: EntryPoint) {
    this._entrances = this._entrances.filter((e) => e.id !== entrance.id);
  }
}
