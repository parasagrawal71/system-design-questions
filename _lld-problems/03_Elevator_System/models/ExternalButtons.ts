import { Direction } from "../constants/constants";
import { ExternalDispatcher } from "../services/ExternalDispatcher";

export class ExternalButtons {
  private _externalDispatcher: ExternalDispatcher;

  constructor() {
    this._externalDispatcher = new ExternalDispatcher();
  }

  public pressButton(floorNo: number, dir: Direction): void {
    this._externalDispatcher.submitExternalRequest(floorNo, dir);
  }
}
