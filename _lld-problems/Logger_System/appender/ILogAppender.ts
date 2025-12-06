import { LogMessage } from "../model/LogMessage";

export interface ILogAppender {
  append(message: LogMessage): void;
}
