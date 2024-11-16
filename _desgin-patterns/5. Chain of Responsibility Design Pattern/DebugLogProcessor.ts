import { LogProcessor } from "./LogProcessor";

export class DebugLogProcessor extends LogProcessor {
  constructor(nextProcessor: LogProcessor | null) {
    super(nextProcessor);
  }

  public log(logLevel: number, message: string): void {
    if (logLevel === LogProcessor.DEBUG) {
      console.log(`DEBUG: ${message}`);
    } else {
      super.log(logLevel, message);
    }
  }
}
