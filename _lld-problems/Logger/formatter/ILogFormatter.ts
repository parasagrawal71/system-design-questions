import { LogMessage } from "../model/LogMessage";

export interface ILogFormatter {
  format(message: LogMessage): string;
}
