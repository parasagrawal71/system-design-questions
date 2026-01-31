import { ATMStatus } from "../enum/enums";
import { ATMMachine } from "../service/ATMMachine";
import { AuthenticatedState } from "../state/AuthenticatedState";
import { CardInsertedState } from "../state/CardInsertedState";
import { DispenseCashState } from "../state/DispenseCashState";
import { IATMState } from "../state/IATMState";
import { IdleState } from "../state/IdleState";

export class ATMStateFactory {
  static getState(status: ATMStatus, atmMachine: ATMMachine): IATMState {
    switch (status) {
      case ATMStatus.IDLE:
        return new IdleState(atmMachine);

      case ATMStatus.CARD_INSERTED:
        return new CardInsertedState(atmMachine);

      case ATMStatus.AUTHENTICATED:
        return new AuthenticatedState(atmMachine);

      case ATMStatus.DISPENSE_CASH:
        return new DispenseCashState(atmMachine);

      default:
        throw new Error("Invalid ATM status");
    }
  }
}
