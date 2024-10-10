import { PIECE_TYPE } from "../constants/constants";

export class PlayingPiece {
  private _pieceType: PIECE_TYPE;

  constructor(type: PIECE_TYPE) {
    this._pieceType = type;
  }

  public get pieceType(): PIECE_TYPE {
    return this._pieceType;
  }
}
