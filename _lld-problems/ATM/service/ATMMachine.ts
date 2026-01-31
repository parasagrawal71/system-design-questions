import { ATMStateFactory } from "../factory/ATMStateFactory";
import { ATM } from "../model/ATM";
import { Card } from "../model/Card";
import { ATMRepository } from "../repository/ATMRepository";
import { IATMState } from "../state/IATMState";

export class ATMMachine {
  private atm: ATM | null;
  private state: IATMState;
  private currentCard: Card | null = null;

  constructor(
    private readonly atmRepository: ATMRepository,
    atmId: string,
  ) {
    if (!this.atmRepository.getById(atmId)) {
      throw new Error("ATM does not exist");
    }
    this.atm = this.atmRepository.getById(atmId);
    this.state = ATMStateFactory.getState(this.atm?.getStatus()!, this);
  }

  insertCard(card: Card): void {
    this.state.insertCard(card);
  }

  enterPin(pin: string): void {
    this.state.enterPin(pin);
  }

  selectOption(option: string): void {
    this.state.selectOption(option);
  }

  dispenseCash(amount: number): void {
    this.state.dispenseCash(amount);
  }

  ejectCard(): void {
    this.state.ejectCard();
  }

  // setters
  setState(state: IATMState): void {
    this.state = state;
  }

  setCurrentCard(card: Card | null): void {
    this.currentCard = card;
  }

  // getters
  getState(): IATMState {
    return this.state;
  }

  getCurrentCard(): Card | null {
    return this.currentCard;
  }

  getAtm(): ATM | null {
    return this.atm;
  }
}
