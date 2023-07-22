import Movie from "../models/Movie";

class SearchService {
  constructor() {}

  searchMovies(movies: Movie[], movieName: string): Movie[] {
    const matchedMovies = movies.filter((movie: Movie) => {
      if (movie.getName().toLowerCase().includes(movieName.toLowerCase())) {
        return movie;
      }
    });
    return matchedMovies;
  }
}

export default SearchService;
