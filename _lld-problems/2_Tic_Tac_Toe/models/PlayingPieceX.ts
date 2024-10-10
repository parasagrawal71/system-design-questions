import { PIECE_TYPE } from "../constants/constants";
import { PlayingPiece } from "./PlayingPiece";

export class PlayingPieceX extends PlayingPiece {
  constructor() {
    super(PIECE_TYPE.X);
  }
}
