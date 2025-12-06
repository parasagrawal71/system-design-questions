import { LogLevel } from "../enum/LogLevel";

export class LogMessage {
  private logLevel: LogLevel;
  private message: string;
  private timestamp: Date;

  constructor(logLevel: LogLevel, message: string) {
    this.logLevel = logLevel;
    this.message = message;
    this.timestamp = new Date();
  }

  public getLogLevel(): LogLevel {
    return this.logLevel;
  }

  public getMessage(): string {
    return this.message;
  }

  public getTimestamp(): Date {
    return this.timestamp;
  }
}
