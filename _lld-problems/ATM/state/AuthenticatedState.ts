import { ATMStatus } from "../enum/enums";
import { ATMStateFactory } from "../factory/ATMStateFactory";
import { Card } from "../model/Card";
import { ATMMachine } from "../service/ATMMachine";
import { IATMState } from "./IATMState";

export class AuthenticatedState implements IATMState {
  private atmMachine: ATMMachine;

  constructor(atmMachine: ATMMachine) {
    this.atmMachine = atmMachine;
  }

  insertCard(card: Card): void {
    console.log("Card already inserted");
  }

  enterPin(pin: string): void {
    console.log("Already authenticated");
  }

  selectOption(option: string): void {
    // can add other options such as deposit, check balance based on selected option
    console.log("Option selected. Withdraw");
    this.atmMachine.setState(ATMStateFactory.getState(ATMStatus.DISPENSE_CASH, this.atmMachine));
  }

  dispenseCash(amount: number): void {
    console.log("Select an option first");
  }

  ejectCard(): void {
    this.atmMachine.setCurrentCard(null);
    console.log("Card ejected");
    this.atmMachine.setState(ATMStateFactory.getState(ATMStatus.IDLE, this.atmMachine));
  }

  getStatus(): ATMStatus {
    return ATMStatus.AUTHENTICATED;
  }
}
