import Screen from "./Screen";

class Theatre {
  private _id: string;
  private _name: string;
  private _screens: Array<Screen>;

  constructor(id: string, name: string, screens = []) {
    this._id = id;
    this._name = name;
    this._screens = screens;
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this._name;
  }

  getScreens(): Array<Screen> {
    return this._screens;
  }

  addScreen(screen: Screen): void {
    this._screens.push(screen);
  }
}

export default Theatre;
