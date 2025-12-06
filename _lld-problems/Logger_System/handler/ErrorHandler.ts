import { LogLevel } from "../enum/LogLevel";
import { LogHandler } from "./LogHandler";

export class ErrorHandler extends LogHandler {
  canHandle(level: LogLevel): boolean {
    return level === LogLevel.ERROR;
  }
}
