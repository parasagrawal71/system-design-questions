import { PIECE_TYPE } from "../enums/enums";
import { PlayingPiece } from "./PlayingPiece";

export class PlayingPieceO extends PlayingPiece {
  constructor() {
    super(PIECE_TYPE.O);
  }
}
