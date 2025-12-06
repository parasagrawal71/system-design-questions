import { LogLevel } from "./enum/LogLevel";
import { LogHandler } from "./handler/LogHandler";
import { LogHandlerConfig } from "./LogHandlerConfig";
import { LogMessage } from "./model/LogMessage";

export class Logger {
  private static INSTANCE = new Logger();
  private handlerChain: LogHandler | null = null;

  constructor() {
    this.handlerChain = LogHandlerConfig.build();
  }

  static getInstance(): Logger {
    return Logger.INSTANCE;
  }

  log(logLevel: LogLevel, message: string) {
    const msg = new LogMessage(logLevel, message);
    if (this.handlerChain) {
      this.handlerChain.handle(msg);
    }
  }

  debug(message: string) {
    this.log(LogLevel.DEBUG, message);
  }

  info(message: string) {
    this.log(LogLevel.INFO, message);
  }

  warn(message: string) {
    this.log(LogLevel.WARN, message);
  }

  error(message: string) {
    this.log(LogLevel.ERROR, message);
  }
}
