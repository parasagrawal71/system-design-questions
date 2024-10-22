export class User {
  public _userId: string;
  public _userName: string;
  public _drivingLicense: string;

  constructor(userId: string, userName: string, drivingLicense: string) {
    this._userId = userId;
    this._userName = userName;
    this._drivingLicense = drivingLicense;
  }

  public get userId(): string {
    return this._userId;
  }

  public get userName(): string {
    return this._userName;
  }

  public get drivingLicense(): string {
    return this._drivingLicense;
  }
}
