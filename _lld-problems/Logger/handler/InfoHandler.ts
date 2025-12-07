import { LogLevel } from "../enum/LogLevel";
import { LogHandler } from "./LogHandler";

export class InfoHandler extends LogHandler {
  canHandle(level: LogLevel): boolean {
    return level === LogLevel.INFO;
  }
}
