import { UserTier } from "../enums/enums";

export class User {
  private id: string;

  private tier: UserTier;

  constructor(id: string, tier: UserTier) {
    this.id = id;
    this.tier = tier;
  }

  // getters
  getId(): string {
    return this.id;
  }

  getTier(): UserTier {
    return this.tier;
  }
}
