class Seat {
  private _id: string;
  private row: string;
  private _seatNo: number;

  constructor(id: string, row: string, seatNo: number) {
    this._id = id;
    this.row = row;
    this._seatNo = seatNo;
  }

  getId(): string {
    return this._id;
  }

  getRow(): string {
    return this.row;
  }

  getSeatNo(): number {
    return this._seatNo;
  }
}

export default Seat;
