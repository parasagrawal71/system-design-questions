import { LogLevel } from "../enum/LogLevel";
import { LogHandler } from "./LogHandler";

export class WarnHandler extends LogHandler {
  canHandle(level: LogLevel): boolean {
    return level === LogLevel.WARN;
  }
}
