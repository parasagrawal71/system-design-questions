import Movie from "./Movie";
import Screen from "./Screen";
import Theatre from "./Theatre";

class Show {
  private _id: string;
  private _showTime: string;
  private _screen: Screen;
  private _movie: Movie;
  private _theatre: Theatre;

  constructor(id: string, startTime: string, screen: Screen, movie: Movie, theatre: Theatre) {
    this._id = id;
    this._showTime = startTime;
    this._screen = screen;
    this._movie = movie;
    this._theatre = theatre;
  }

  getId(): string {
    return this._id;
  }

  getShowTime(): string {
    return this._showTime;
  }

  getScreen(): Screen {
    return this._screen;
  }

  getMovie(): Movie {
    return this._movie;
  }

  getTheatre(): Theatre {
    return this._theatre;
  }
}

export default Show;
