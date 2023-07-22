import Screen from "../models/Screen";
import Seat from "../models/Seat";
import Theatre from "../models/Theatre";

// TheatreService = TheatreService + ScreenService + SeatService
class TheatreService {
  private _theatres: Record<string, Theatre> = {};
  private _screens: Record<string, Screen> = {};
  private _seats: Record<string, Seat> = {};

  constructor() {}

  createTheatre(theatreName: string): Theatre {}

  getTheatre(theatreId: string): Theatre {}

  getTheatres(): Array<Theatre> {}

  createScreenInTheatre(screenName: string, theatre: Theatre): Screen {}

  getScreen(screenId: string): Screen {}

  createSeatInScreen(row: string, seatNo: number, screen: Screen): Seat {}

  getSeat(seatId: string) {}
}

export default TheatreService;
