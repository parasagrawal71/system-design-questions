import Movie from "../models/Movie";

class MovieService {
  private _movies: Record<string, Movie>;

  constructor() {
    this._movies = {};
  }

  public createMovie(movieName: string): Movie {}

  public getMovie(movieId: string): Movie {}

  public getMovies(): Array<Movie> {}
}

export default MovieService;
