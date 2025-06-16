export class ExitPoint {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }
}
