import { ATMStatus } from "../enum/enums";
import { ATMStateFactory } from "../factory/ATMStateFactory";
import { Card } from "../model/Card";
import { ATMMachine } from "../service/ATMMachine";
import { IATMState } from "./IATMState";

export class IdleState implements IATMState {
  private atmMachine: ATMMachine;

  constructor(atmMachine: ATMMachine) {
    this.atmMachine = atmMachine;
  }

  insertCard(card: Card): void {
    this.atmMachine.setCurrentCard(card);
    console.log("Card inserted");
    // this.atmMachine.setState(new CardInsertedState(this.atmMachine)); // use factory
    this.atmMachine.setState(ATMStateFactory.getState(ATMStatus.CARD_INSERTED, this.atmMachine));
  }

  enterPin(pin: string): void {
    console.log("No card inserted");
  }

  selectOption(option: string): void {
    console.log("No card inserted");
  }

  dispenseCash(amount: number): void {
    console.log("No card inserted");
  }

  ejectCard(): void {
    console.log("No card inserted");
  }

  getStatus(): ATMStatus {
    return ATMStatus.IDLE;
  }
}
