import Movie from "../models/Movie";
import Screen from "../models/Screen";
import Show from "../models/Show";
import Theatre from "../models/Theatre";
import { generateUUID } from "../utils/helper";

class ShowService {
  private _shows: Record<string, Show>;

  constructor() {
    this._shows = {};
  }

  createShow(showTime: string, screen: Screen, movie: Movie, theatre: Theatre): Show {
    // Validation: Check if screen is free at the given time slot
    if (!this.checkIfScreenIsFree(showTime, screen, movie, theatre)) {
      throw new Error("Screen is already booked for another show");
    }

    const showId = generateUUID();
    const show = new Show(showId, showTime, screen, movie, theatre);
    this._shows[showId] = show;
    return show;
  }

  getShow(showId: string): Show {
    return this._shows[showId];
  }

  getShowsForScreen(screen: Screen): Array<Show> {
    const screenId = screen.getId();
    const shows = Object.values(this._shows).filter((show: Show) => show.getScreen().getId() === screenId);
    return shows;
  }

  getShowsForMovie(movie: Movie): Array<Show> {
    const movieId = movie.getId();
    const shows = Object.values(this._shows).filter((show: Show) => show.getMovie().getId() === movieId);
    return shows;
  }

  checkIfScreenIsFree(showTime: string, screen: Screen, movie: Movie, theatre: Theatre): boolean {
    const isShowExists = Object.values(this._shows).some((show: Show) => {
      if (
        show.getShowTime() === showTime &&
        show.getScreen().getId() === screen.getId() &&
        show.getTheatre().getId() === theatre.getId() &&
        show.getMovie().getId() === movie.getId()
      ) {
        return true;
      }
      return false;
    });
    return !isShowExists;
  }
}

export default ShowService;
