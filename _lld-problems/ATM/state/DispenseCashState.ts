import { CashDispenserChainBuilder } from "../cor/CashDispenserChainBuilder";
import { ATMStatus } from "../enum/enums";
import { ATMStateFactory } from "../factory/ATMStateFactory";
import { Card } from "../model/Card";
import { ATMMachine } from "../service/ATMMachine";
import { IATMState } from "./IATMState";

export class DispenseCashState implements IATMState {
  private atmMachine: ATMMachine;
  private chain = CashDispenserChainBuilder.buildChain();

  constructor(atmMachine: ATMMachine) {
    this.atmMachine = atmMachine;
  }

  insertCard(card: Card): void {
    console.log("Transaction is in progress");
  }

  enterPin(pin: string): void {
    console.log("Already authenticated");
  }

  selectOption(option: string): void {
    console.log("Option already selected");
  }

  dispenseCash(amount: number): void {
    const atmBalance = this.atmMachine.getAtm()?.getCashAvailable() || 0;
    const accountBalance = this.atmMachine.getCurrentCard()?.getAccount().getBalance() || 0;

    if (amount > atmBalance) {
      console.log(`Insufficient cash in ATM`);
      this.ejectCard();
      return;
    }

    if (amount > accountBalance) {
      console.log("Insufficient account balance");
      this.ejectCard();
      return;
    }

    // now check if note combination is possible
    if (this.chain.canDispense(this.atmMachine.getAtm()!, amount)) {
      this.chain.dispense(this.atmMachine.getAtm()!, amount);

      // Deduct from ATM and account balance
      // this.atmMachine.getAtm()!.setCashAvailable(atmBalance - amount); // todo: not required
      this.atmMachine
        .getCurrentCard()!
        .getAccount()
        .setBalance(accountBalance - amount);

      this.atmMachine.setState(ATMStateFactory.getState(ATMStatus.IDLE, this.atmMachine));
      console.log(`Cash dispensed: ${amount}`);
    } else {
      console.log("Cannot dispense cash with available denominations");
    }

    this.ejectCard();
  }

  ejectCard(): void {
    this.atmMachine.setCurrentCard(null);
    console.log("Card ejected");
    this.atmMachine.setState(ATMStateFactory.getState(ATMStatus.IDLE, this.atmMachine));
  }

  getStatus(): ATMStatus {
    return ATMStatus.DISPENSE_CASH;
  }
}
