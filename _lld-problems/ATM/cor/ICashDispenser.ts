import { ATM } from "../model/ATM";

export interface ICashDispenser {
  setNextDispenser(dispenser: ICashDispenser): void;

  canDispense(atm: ATM, amount: number): boolean;

  dispense(atm: ATM, amount: number): void;
}
