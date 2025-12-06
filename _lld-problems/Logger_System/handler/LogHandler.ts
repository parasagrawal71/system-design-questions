import { ILogAppender } from "../appender/ILogAppender";
import { LogLevel } from "../enum/LogLevel";
import { LogMessage } from "../model/LogMessage";

export abstract class LogHandler {
  protected next: LogHandler | null = null;
  protected appenders: ILogAppender[] = [];

  subscribe(appender: ILogAppender): void {
    this.appenders.push(appender);
  }

  notifyObservers(message: LogMessage): void {
    this.appenders.forEach((appender) => {
      appender.append(message);
    });
  }

  protected abstract canHandle(level: LogLevel): boolean;

  public handle(message: LogMessage): void {
    if (this.canHandle(message.getLogLevel())) {
      this.notifyObservers(message);
    } else if (this.next) {
      this.next.handle(message);
    }
  }

  setNext(next: LogHandler): LogHandler {
    this.next = next;
    return this.next;
  }
}
