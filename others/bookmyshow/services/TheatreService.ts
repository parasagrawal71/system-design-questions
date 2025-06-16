import Screen from "../models/Screen";
import Seat from "../models/Seat";
import Theatre from "../models/Theatre";
import { generateUUID } from "../utils/helper";

// TheatreService = TheatreService + ScreenService + SeatService
class TheatreService {
  private _theatres: Record<string, Theatre> = {};
  private _screens: Record<string, Screen> = {};
  private _seats: Record<string, Seat> = {};

  constructor() {}

  createTheatre(theatreName: string): Theatre {
    const theatreId = generateUUID();
    const theatre = new Theatre(theatreId, theatreName);
    this._theatres[theatreId] = theatre;
    return theatre;
  }

  getTheatre(theatreId: string): Theatre {
    return this._theatres[theatreId]; // Handle Not found Exception
  }

  getTheatres(): Array<Theatre> {
    return Object.values(this._theatres);
  }

  createScreenInTheatre(screenName: string, theatre: Theatre): Screen {
    const screenId = generateUUID();
    const screen = new Screen(screenId, screenName, theatre);
    this._screens[screenId] = screen;
    theatre.addScreen(screen);
    return screen;
  }

  getScreen(screenId: string): Screen {
    return this._screens[screenId]; // Handle not found exception
  }

  createSeatInScreen(row: string, seatNo: number, screen: Screen): Seat {
    const seatId = generateUUID();
    const seat = new Seat(seatId, row, seatNo);
    this._seats[seatId] = seat;
    screen.addSeat(seat);
    return seat;
  }

  getSeat(seatId: string) {
    return this._seats[seatId]; // Handle Not found Exception
  }
}

export default TheatreService;
