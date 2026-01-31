import { ATMStatus } from "../enum/enums";
import { Card } from "../model/Card";

export interface IATMState {
  insertCard(card: Card): void;

  enterPin(pin: string): void;

  selectOption(option: string): void;

  dispenseCash(amount: number): void;

  ejectCard(): void;

  getStatus(): ATMStatus;
}
