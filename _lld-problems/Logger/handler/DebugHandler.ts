import { LogLevel } from "../enum/LogLevel";
import { LogHandler } from "./LogHandler";

export class DebugHandler extends LogHandler {
  canHandle(level: LogLevel): boolean {
    return level === LogLevel.DEBUG;
  }
}
