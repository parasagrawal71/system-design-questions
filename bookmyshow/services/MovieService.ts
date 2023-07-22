import NotFoundException from "../exceptions/NotFoundException";
import Movie from "../models/Movie";
import { generateUUID } from "../utils/helper";

class MovieService {
  private _movies: Record<string, Movie>;

  constructor() {
    this._movies = {};
  }

  public createMovie(movieName: string): Movie {
    const movieId = generateUUID();
    const movie = new Movie(movieId, movieName);
    this._movies[movieId] = movie;
    return movie;
  }

  public getMovie(movieId: string): Movie {
    if (!this._movies[movieId]) {
      throw new NotFoundException(`Movie not found with id = ${movieId}`);
    }

    return this._movies[movieId];
  }

  public getMovies(): Array<Movie> {
    return Object.values(this._movies);
  }
}

export default MovieService;
