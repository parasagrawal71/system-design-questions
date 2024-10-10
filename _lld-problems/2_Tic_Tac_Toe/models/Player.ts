import { PlayingPiece } from "./PlayingPiece";

export class Player {
  private _name: string;
  private _piece: PlayingPiece;

  constructor(name: string, piece: PlayingPiece) {
    this._name = name;
    this._piece = piece;
  }

  // Add getters and setters as required

  public get name(): string {
    return this._name;
  }

  public get piece(): PlayingPiece {
    return this._piece;
  }
}
