class Seat {
  private _id: string;
  private _row: string;
  private _seatNo: number;

  constructor(id: string, row: string, seatNo: number) {
    this._id = id;
    this._row = row;
    this._seatNo = seatNo;
  }

  getId(): string {
    return this._id;
  }

  getRow(): string {
    return this._row;
  }

  getSeatNo(): number {
    return this._seatNo;
  }
}

export default Seat;
