import { LogProcessor } from "./LogProcessor";

export class ErrorLogProcessor extends LogProcessor {
  constructor(nextProcessor: LogProcessor | null) {
    super(nextProcessor);
  }

  public log(logLevel: number, message: string): void {
    if (logLevel === LogProcessor.ERROR) {
      console.log(`ERROR: ${message}`);
    } else {
      super.log(logLevel, message);
    }
  }
}
