import { ATM } from "../model/ATM";
import { ICashDispenser } from "./ICashDispenser";

export class OneHundredDispenser implements ICashDispenser {
  private next: ICashDispenser | null = null;

  setNextDispenser(dispenser: ICashDispenser): void {
    this.next = dispenser;
  }

  canDispense(atm: ATM, amount: number): boolean {
    const availableNotes = atm.getOneHundredCount();
    const notes = Math.min(Math.floor(amount / 100), availableNotes);
    const remainder = amount - notes * 100;

    if (remainder === 0) {
      return true;
    } else {
      return this.next ? this.next.canDispense(atm, remainder) : false;
    }
  }

  dispense(atm: ATM, amount: number): void {
    const availableNotes = atm.getOneHundredCount();
    const notes = Math.min(Math.floor(amount / 100), availableNotes);
    const remainder = amount - notes * 100;

    atm.setOneHundredCount(atm.getOneHundredCount() - notes);
    if (notes > 0) {
      console.log(`Dispensed ${notes} x 100 notes`);
    }

    if (remainder > 0 && this.next) {
      this.next.dispense(atm, remainder);
    }
  }
}
