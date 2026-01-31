import { ATMStatus } from "../enum/enums";
import { ATM } from "../model/ATM";

export class ATMRepository {
  private atms: Map<string, ATM> = new Map();

  save(atm: ATM): void {
    this.atms.set(atm.getId(), atm);
  }

  getById(id: string): ATM | null {
    return this.atms.get(id) || null;
  }

  updateATMStatusById(id: string, newStatus: ATMStatus): void {
    const atm = this.atms.get(id);
    if (!atm) {
      throw new Error("ATM does not exist");
    }

    atm.setStatus(newStatus);
  }
}
