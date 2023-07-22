import Seat from "./Seat";
import Theatre from "./Theatre";

class Screen {
  private _id: string;
  private _name: string;
  private _theatre: Theatre; // Foreign Key
  private _seats: Array<Seat>;

  constructor(id: string, name: string, theatre: Theatre, seats = []) {
    this._id = id;
    this._name = name;
    this._theatre = theatre;
    this._seats = seats;
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this._name;
  }

  getTheatre(): Theatre {
    return this._theatre;
  }

  getSeats(): Array<Seat> {
    return this._seats;
  }

  addSeat(seat: Seat): void {
    this._seats.push(seat);
  }
}

export default Screen;
