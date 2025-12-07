export class Auction {
  private id: string;

  private name: string;

  private minValue: number;

  private maxValue: number;

  private sellerId: string;

  private isActive: boolean;

  constructor(id: string, name: string, minValue: number, maxValue: number, sellerId: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.sellerId = sellerId;
    this.isActive = isActive;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getMinValue(): number {
    return this.minValue;
  }

  public getMaxValue(): number {
    return this.maxValue;
  }

  public getSellerId(): string {
    return this.sellerId;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }
}
