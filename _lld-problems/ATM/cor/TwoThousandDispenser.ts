import { ATM } from "../model/ATM";
import { ICashDispenser } from "./ICashDispenser";

export class TwoThousandDispenser implements ICashDispenser {
  private next: ICashDispenser | null = null;

  setNextDispenser(dispenser: ICashDispenser): void {
    this.next = dispenser;
  }

  canDispense(atm: ATM, amount: number): boolean {
    const availableNotes = atm.getTwoThousandCount();
    const notes = Math.min(Math.floor(amount / 2000), availableNotes);
    const remainder = amount - notes * 2000;

    if (remainder === 0) {
      return true;
    } else {
      return this.next ? this.next.canDispense(atm, remainder) : false;
    }
  }

  dispense(atm: ATM, amount: number): void {
    const availableNotes = atm.getTwoThousandCount();
    const notes = Math.min(Math.floor(amount / 2000), availableNotes);
    const remainder = amount - notes * 2000;

    atm.setTwoThousandCount(atm.getTwoThousandCount() - notes);
    if (notes > 0) {
      console.log(`Dispensed ${notes} x 2000 notes`);
    }

    if (remainder > 0 && this.next) {
      this.next.dispense(atm, remainder);
    }
  }
}
