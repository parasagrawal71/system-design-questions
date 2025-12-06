import { ILogAppender } from "./appender/ILogAppender";
import { LogLevel } from "./enum/LogLevel";
import { DebugHandler } from "./handler/DebugHandler";
import { ErrorHandler } from "./handler/ErrorHandler";
import { InfoHandler } from "./handler/InfoHandler";
import { LogHandler } from "./handler/LogHandler";
import { WarnHandler } from "./handler/WarnHandler";

export class LogHandlerConfig {
  private static debug: LogHandler = new DebugHandler();
  private static info: LogHandler = new InfoHandler();
  private static warn: LogHandler = new WarnHandler();
  private static error: LogHandler = new ErrorHandler();

  static build(): LogHandler {
    LogHandlerConfig.debug.setNext(LogHandlerConfig.info);
    LogHandlerConfig.info.setNext(LogHandlerConfig.warn);
    LogHandlerConfig.warn.setNext(LogHandlerConfig.error);

    return LogHandlerConfig.debug;
  }

  static addAppenderForLevel(level: LogLevel, appender: ILogAppender): void {
    switch (level) {
      case LogLevel.DEBUG:
        LogHandlerConfig.debug.subscribe(appender);
        break;
      case LogLevel.INFO:
        LogHandlerConfig.info.subscribe(appender);
        break;
      case LogLevel.WARN:
        LogHandlerConfig.warn.subscribe(appender);
        break;
      case LogLevel.ERROR:
        LogHandlerConfig.error.subscribe(appender);
        break;
    }
  }
}
