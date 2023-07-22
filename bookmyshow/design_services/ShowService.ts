import Movie from "../models/Movie";
import Show from "../models/Show";
import Theatre from "../models/Theatre";

class ShowService {
  private _shows: Record<string, Show>;

  constructor() {
    this._shows = {};
  }

  createShow(showTime: string, screen: Screen, movie: Movie, theatre: Theatre): Show {}

  getShow(showId: string): Show {}

  getShowsForScreen(screen: Screen): Array<Show> {}

  getShowsForMovie(movie: Movie): Array<Show> {}

  checkIfScreenIsFree(showTime: string, screen: Screen, movie: Movie, theatre: Theatre): boolean {}
}

export default ShowService;
