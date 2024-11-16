import { LogProcessor } from "./LogProcessor";

export class InfoLogProcessor extends LogProcessor {
  constructor(nextProcessor: LogProcessor | null) {
    super(nextProcessor);
  }

  public log(logLevel: number, message: string): void {
    if (logLevel === LogProcessor.INFO) {
      console.log(`INFO: ${message}`);
    } else {
      super.log(logLevel, message);
    }
  }
}
