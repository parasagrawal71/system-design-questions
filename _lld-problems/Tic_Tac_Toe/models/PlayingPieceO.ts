import { PIECE_TYPE } from "../constants/constants";
import { PlayingPiece } from "./PlayingPiece";

export class PlayingPieceO extends PlayingPiece {
  constructor() {
    super(PIECE_TYPE.O);
  }
}
