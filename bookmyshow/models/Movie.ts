class Movie {
  private _id: string;
  private _name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this._name;
  }
}

export default Movie;
