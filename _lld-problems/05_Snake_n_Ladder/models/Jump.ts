export class Jump {
  private _start: number;
  private _end: number;

  constructor(start: number, end: number) {
    this._start = start;
    this._end = end;
  }

  get start(): number {
    return this._start;
  }

  get end(): number {
    return this._end;
  }
}
