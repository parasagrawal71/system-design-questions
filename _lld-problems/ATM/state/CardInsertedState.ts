import { ATMStatus } from "../enum/enums";
import { ATMStateFactory } from "../factory/ATMStateFactory";
import { Card } from "../model/Card";
import { ATMMachine } from "../service/ATMMachine";
import { IATMState } from "./IATMState";

export class CardInsertedState implements IATMState {
  private atmMachine: ATMMachine;

  constructor(atmMachine: ATMMachine) {
    this.atmMachine = atmMachine;
  }

  insertCard(card: Card): void {
    console.log("Card already inserted");
  }

  enterPin(pin: string): void {
    if (this.atmMachine.getCurrentCard()?.getPin() === pin) {
      console.log("PIN correct. Authenticated!");
      this.atmMachine.setState(ATMStateFactory.getState(ATMStatus.AUTHENTICATED, this.atmMachine));
    } else {
      console.log("Incorrect PIN");
    }
  }

  selectOption(option: string): void {
    console.log("Enter PIN first");
  }

  dispenseCash(amount: number): void {
    console.log("Enter PIN first");
  }

  ejectCard(): void {
    this.atmMachine.setCurrentCard(null);
    console.log("Card ejected");
    this.atmMachine.setState(ATMStateFactory.getState(ATMStatus.IDLE, this.atmMachine));
  }

  getStatus(): ATMStatus {
    return ATMStatus.CARD_INSERTED;
  }
}
