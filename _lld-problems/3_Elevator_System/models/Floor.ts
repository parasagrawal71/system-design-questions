import { Direction } from "../constants/constants";
import { ExternalButtons } from "./ExternalButtons";

export class Floor {
  private _floorNo: number;
  private _externalButtons: ExternalButtons;

  constructor(floorNo: number) {
    this._floorNo = floorNo;
    this._externalButtons = new ExternalButtons();
  }

  public get floorNo(): number {
    return this._floorNo;
  }

  public pressButton(dir: Direction): void {
    this._externalButtons.pressButton(this._floorNo, dir);
  }
}
