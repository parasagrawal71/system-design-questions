export abstract class LogProcessor {
  public static INFO: number = 1;
  public static DEBUG: number = 2;
  public static ERROR: number = 3;

  nextProcessor: LogProcessor | null;

  constructor(nextProcessor: LogProcessor | null) {
    this.nextProcessor = nextProcessor;
  }

  public log(logLevel: number, message: string): void {
    if (this.nextProcessor != null) {
      this.nextProcessor.log(logLevel, message);
    }
  }
}
