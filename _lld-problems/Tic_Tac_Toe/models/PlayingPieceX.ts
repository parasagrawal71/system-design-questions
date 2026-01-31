import { PIECE_TYPE } from "../enums/enums";
import { PlayingPiece } from "./PlayingPiece";

export class PlayingPieceX extends PlayingPiece {
  constructor() {
    super(PIECE_TYPE.X);
  }
}
