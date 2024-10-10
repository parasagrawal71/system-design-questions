import { PlayingPiece } from "./PlayingPiece";

export class Board {
  private _size: number;
  private _board: PlayingPiece[][] | null[][];

  constructor(size: number) {
    this._size = size;
    this._board = [];
    for (let i = 0; i < size; i++) {
      this._board[i] = [];
      for (let j = 0; j < size; j++) {
        this._board[i][j] = null;
      }
    }
  }

  // Add getters and setters as required

  public get size(): number {
    return this._size;
  }

  public get board(): PlayingPiece[][] | null[][] {
    return this._board;
  }

  addPiece(row: number, col: number, piece: PlayingPiece): boolean {
    if (this._board[row][col] !== null) {
      return false;
    }

    this._board[row][col] = piece;
    return true;
  }

  printBoard(): void {
    for (let i = 0; i < this._size; i++) {
      const row = [];
      for (let j = 0; j < this._size; j++) {
        const piece = this._board[i][j];
        if (piece === null) row.push(" ");
        else row.push(piece.pieceType);
      }
      console.log(row.join(" | "));
      console.log("\n");
    }
  }

  getFreeCells(): [number, number][] {
    const freeCells: [number, number][] = [];

    for (let i = 0; i < this._size; i++) {
      for (let j = 0; j < this._size; j++) {
        if (this._board[i][j] === null) {
          freeCells.push([i, j]);
        }
      }
    }

    return freeCells;
  }
}
