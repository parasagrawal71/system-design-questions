import { Jump } from "./Jump";

export class Cell {
  private _jump: Jump | null = null;
  private _isSnake: boolean = false;
  private _isLadder: boolean = false;

  constructor() {}

  get jump(): Jump | null {
    return this._jump;
  }

  get isSnake(): boolean {
    return this._isSnake;
  }

  get isLadder(): boolean {
    return this._isLadder;
  }

  set jump(jump: Jump | null) {
    this._jump = jump;
  }

  set isSnake(isSnake: boolean) {
    this._isSnake = isSnake;
  }

  set isLadder(isLadder: boolean) {
    this._isLadder = isLadder;
  }
}
