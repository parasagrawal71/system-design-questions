import { ILogFormatter } from "../formatter/ILogFormatter";
import { LogMessage } from "../model/LogMessage";
import { ILogAppender } from "./ILogAppender";

export class ConsoleAppender implements ILogAppender {
  constructor(private readonly formatter: ILogFormatter) {}

  append(message: LogMessage): void {
    console.log(this.formatter.format(message));
  }
}
