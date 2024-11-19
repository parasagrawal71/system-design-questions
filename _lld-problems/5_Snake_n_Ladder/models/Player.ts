export class Player {
  private _id: string;
  private _currentPosition: number;

  constructor(id: string, currPosition: number) {
    this._id = id;
    this._currentPosition = currPosition;
  }

  get id(): string {
    return this._id;
  }

  get currentPosition(): number {
    return this._currentPosition;
  }

  set currentPosition(position: number) {
    this._currentPosition = position;
  }
}
