export class Location {
  private _address: string;
  private _city: string;
  private _state: string;
  private _country: string;
  private _pincode: number;

  constructor(address: string, city: string, state: string, country: string, pincode: number) {
    this._address = address;
    this._city = city;
    this._state = state;
    this._country = country;
    this._pincode = pincode;
  }

  public get city(): string {
    return this._city;
  }
}
