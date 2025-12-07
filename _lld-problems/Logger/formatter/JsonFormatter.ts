import { LogMessage } from "../model/LogMessage";
import { ILogFormatter } from "./ILogFormatter";

export class JsonFormatter implements ILogFormatter {
  format(message: LogMessage): string {
    return JSON.stringify({
      timestamp: this.formatDate(message.getTimestamp()),
      level: message.getLogLevel(),
      message: message.getMessage(),
    });
  }

  formatDate = (date: Date): string => {
    return `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
}
