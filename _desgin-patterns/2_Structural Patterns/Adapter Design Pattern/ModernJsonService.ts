import { IUserService } from "./IUserService";

export class ModernJsonService implements IUserService {
  fetchUserData(): string {
    return JSON.stringify({ name: "John", age: 30 }); // JSON response
  }
}
