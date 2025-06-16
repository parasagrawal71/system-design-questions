import * as rl from "readline-sync";
import { Board } from "../models/Board";
import { Player } from "../models/Player";
import { PlayingPieceO } from "../models/PlayingPieceO";
import { PlayingPieceX } from "../models/PlayingPieceX";
import { PIECE_TYPE } from "../constants/constants";

export class Game {
  private _players: Player[] = [];
  private _board: Board;

  constructor() {
    this.initialiseGame();

    // Creating board
    this._board = new Board(3);
  }

  initialiseGame(): void {
    // Creating 2 players
    const playingPieceX = new PlayingPieceX();
    const player1 = new Player("Player 1", playingPieceX);

    const playingPieceO = new PlayingPieceO();
    const player2 = new Player("Player 2", playingPieceO);

    this._players.push(player1);
    this._players.push(player2);
  }

  startGame(): string {
    let noWinner = true;
    while (noWinner) {
      // Pop the player whose turn it is (From the beginning)
      const player: Player = this._players.shift() as Player;

      // Check if board is full
      console.log("\n");
      this._board.printBoard();
      const freeCells = this._board.getFreeCells();
      if (!freeCells.length) {
        // Board is full
        console.log("Game Over");
        break;
      }

      // Read player's input
      const input = rl.question(`Player ${player.name}:: Enter row column (space-separated): `);
      const [row, col] = input?.split(" ")?.map((x) => Number(x)) || [];

      // Place the piece in the board
      const isAdded = this._board.addPiece(row, col, player.piece);
      if (!isAdded) {
        console.log("Oops! That spot is already occupied. Choose another spot.");
        this._players.unshift(player); // Insert the player at the beginning
        continue;
      }
      this._players.push(player); // Insert the player at the end

      const isWinner: boolean = this.isThereWinner(row, col, player.piece.pieceType);
      if (isWinner) {
        return player.name;
      }
    }

    return "tie";
  }

  // It can be improved by N-Queen Problem approach [O(1) TC]
  isThereWinner(row: number, column: number, pieceType: PIECE_TYPE): boolean {
    let rowMatch: boolean = true;
    let columnMatch: boolean = true;
    let diagonalMatch: boolean = true;
    let antiDiagonalMatch: boolean = true;

    const size = this._board.size;
    const gameBoard = this._board.board;

    // Check in row
    for (let i = 0; i < size; i++) {
      if (gameBoard[row][i] == null || gameBoard[row][i]?.pieceType != pieceType) {
        rowMatch = false;
      }
    }

    // Check in column
    for (let i = 0; i < size; i++) {
      if (gameBoard[i][column] == null || gameBoard[i][column]?.pieceType != pieceType) {
        columnMatch = false;
      }
    }

    // Check diagonal
    for (let i = 0, j = 0; i < size; i++, j++) {
      if (gameBoard[i][j] == null || gameBoard[i][j]?.pieceType != pieceType) {
        diagonalMatch = false;
      }
    }

    // Check anti-diagonal
    for (let i = 0, j = size - 1; i < size; i++, j--) {
      if (gameBoard[i][j] == null || gameBoard[i][j]?.pieceType != pieceType) {
        antiDiagonalMatch = false;
      }
    }

    return rowMatch || columnMatch || diagonalMatch || antiDiagonalMatch;
  }
}
