import { ILogFormatter } from "../formatter/ILogFormatter";
import { LogMessage } from "../model/LogMessage";
import { ILogAppender } from "./ILogAppender";

export class ConsoleAppender implements ILogAppender {
  constructor(private readonly formatter: ILogFormatter) {}

  async append(message: LogMessage): Promise<void> {
    console.log(this.formatter.format(message));
  }
}
