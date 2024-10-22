import { Location } from "../models/Location";
import { Store } from "../models/Store";
import { User } from "../models/User";

export class VehicleRentalSystem {
  private _users: User[] = [];
  private _stores: Store[] = [];

  // CRUD operations on users and stores

  constructor(users: User[], stores: Store[]) {
    this._users = users;
    this._stores = stores;
  }

  public getStore(location: Location) {
    return this._stores.find((store) => store.location.city === location.city);
  }

  public get users(): User[] {
    return this._users;
  }

  public get stores(): Store[] {
    return this._stores;
  }
}
