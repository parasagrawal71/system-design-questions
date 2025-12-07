import { LogMessage } from "../model/LogMessage";
import { ILogFormatter } from "./ILogFormatter";

export class PlainTextFormatter implements ILogFormatter {
  format(message: LogMessage): string {
    return `${this.formatDate(message.getTimestamp())} [${message.getLogLevel()}]: ${message.getMessage()}`;
  }

  formatDate = (date: Date): string => {
    return `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
}
