export class PaymentRequest {
  private sender: string;

  private receiver: string;

  private amount: number;

  private currency: string;

  constructor(sender: string, receiver: string, amount: number, currency: string) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
    this.currency = currency;
  }

  public getSender(): string {
    return this.sender;
  }

  public getReceiver(): string {
    return this.receiver;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCurrency(): string {
    return this.currency;
  }
}
