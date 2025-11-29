import { Cell } from "./Cell";
import { Jump } from "./Jump";

export class Board {
  private _cells: Cell[][] = [];

  constructor(boardSize: number, numOfSnakes: number, numOfLadders: number) {
    this.initialiseCells(boardSize);
    this.addSnakesNLadders(boardSize, numOfSnakes, numOfLadders);
  }

  get cells(): Cell[][] {
    return this._cells;
  }

  initialiseCells(boardSize: number) {
    for (let i = 0; i < boardSize; i++) {
      this._cells[i] = [];
      for (let j = 0; j < boardSize; j++) {
        this._cells[i][j] = new Cell();
      }
    }
  }

  addSnakesNLadders(boardSize: number, numOfSnakes: number, numOfLadders: number) {
    while (numOfSnakes > 0) {
      const snakeHead = Math.floor(Math.random() * (boardSize * boardSize - 1)); // IMPORTANT: bracket around (boardSize * boardSize - 1) is needed to get a number ranging from 0 to 99
      const snakeTail = Math.floor(Math.random() * (boardSize * boardSize - 1));
      if (snakeTail >= snakeHead) {
        continue;
      }

      const snakeObj = new Jump(snakeHead, snakeTail);
      const cell: Cell = this.getCell(snakeHead);
      cell.jump = snakeObj;
      cell.isSnake = true;
      numOfSnakes--;
    }

    while (numOfLadders > 0) {
      const ladderStart = Math.floor(Math.random() * (boardSize * boardSize - 1));
      const ladderEnd = Math.floor(Math.random() * (boardSize * boardSize - 1));
      if (ladderStart >= ladderEnd) {
        continue;
      }

      const ladderObj = new Jump(ladderStart, ladderEnd);
      const cell: Cell = this.getCell(ladderStart);
      if (cell.isSnake) {
        continue;
      }
      cell.jump = ladderObj;
      cell.isLadder = true;
      numOfLadders--;
    }
  }

  getCell(position: number): Cell {
    const boardSize = this._cells.length;
    const row = Math.floor(position / boardSize);
    const col = position % boardSize;
    return this._cells[row][col];
  }
}
