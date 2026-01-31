import { ATMStatus } from "../enum/enums";

export class ATM {
  private id: string;

  private status: ATMStatus = ATMStatus.IDLE;

  private twoThousandCount: number;

  private fiveHundredCount: number;

  private oneHundredCount: number;

  constructor(id: string, twoThousandCount: number, fiveHundredCount: number, oneHundredCount: number) {
    this.id = id;
    this.twoThousandCount = twoThousandCount;
    this.fiveHundredCount = fiveHundredCount;
    this.oneHundredCount = oneHundredCount;
  }

  // getters
  getId(): string {
    return this.id;
  }

  getStatus(): ATMStatus {
    return this.status;
  }

  getCashAvailable(): number {
    return this.twoThousandCount * 2000 + this.fiveHundredCount * 500 + this.oneHundredCount * 100;
  }

  getTwoThousandCount(): number {
    return this.twoThousandCount;
  }

  getFiveHundredCount(): number {
    return this.fiveHundredCount;
  }

  getOneHundredCount(): number {
    return this.oneHundredCount;
  }

  // setters
  setStatus(status: ATMStatus): void {
    this.status = status;
  }

  setTwoThousandCount(twoThousandCount: number): void {
    this.twoThousandCount = twoThousandCount;
  }

  setFiveHundredCount(fiveHundredCount: number): void {
    this.fiveHundredCount = fiveHundredCount;
  }

  setOneHundredCount(oneHundredCount: number): void {
    this.oneHundredCount = oneHundredCount;
  }
}
