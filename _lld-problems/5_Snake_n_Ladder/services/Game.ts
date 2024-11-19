import { BOARD_SIZE, NUM_OF_LADDERS, NUM_OF_SNAKES } from "../constants/constants";
import { Board } from "../models/Board";
import { Dice } from "../models/Dice";
import { Player } from "../models/Player";

export class Game {
  private board: Board;
  private dice: Dice;
  private players: Player[] = [];
  private winner: Player | null = null;

  constructor() {
    this.board = new Board(BOARD_SIZE, NUM_OF_SNAKES, NUM_OF_LADDERS);
    this.dice = new Dice(1);
    this.initialiseGame();
  }

  initialiseGame() {
    const player1 = new Player("p1", 0);
    const player2 = new Player("p2", 0);
    this.players.push(player1, player2);
  }

  startGame() {
    while (this.winner === null) {
      // Choose whose turn now
      const player: Player = this.findPlayerTurn();
      console.log(`\n${player.id}'s turn, current position: ${player.currentPosition}`);

      // Roll the dice
      const diceValue = this.dice.rollDice();
      console.log(`Dice rolled: ${diceValue}`);

      // Move the player
      let playerNewPosition = player.currentPosition + diceValue;
      playerNewPosition = this.jumpCheck(playerNewPosition);
      player.currentPosition = playerNewPosition;
      console.log(`Moving to new position: ${playerNewPosition}`);

      // Check if player has won
      if (playerNewPosition >= this.board.cells.length * this.board.cells.length - 1) {
        this.winner = player;
        console.log(`\n${player.id} wins!`);
        break;
      }
    }
  }

  findPlayerTurn(): Player {
    const player = this.players.shift();
    this.players.push(player as Player);
    return player as Player;
  }

  jumpCheck(newPosition: number): number {
    const boardSize = this.board.cells.length;
    if (newPosition > boardSize * boardSize - 1) {
      return newPosition;
    }

    const cell = this.board.getCell(newPosition);
    if (cell.jump !== null && cell.jump.start === newPosition) {
      console.log(`jump done by: ${cell.isSnake ? "snake" : "ladder"}`);
      return cell.jump.end;
    }

    return newPosition;
  }
}
