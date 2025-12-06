import { ConsoleAppender } from "./appender/ConsoleAppender";
import { FileAppender } from "./appender/FileAppender";
import { LogLevel } from "./enum/LogLevel";
import { JsonFormatter } from "./formatter/JsonFormatter";
import { PlainTextFormatter } from "./formatter/PlainTextFormatter";
import { Logger } from "./Logger";
import { LogHandlerConfig } from "./LogHandlerConfig";

(function main() {
  const logger: Logger = Logger.getInstance();
  //   const logger = new Logger().getInstance(); // When getInstance is not a static method

  LogHandlerConfig.addAppenderForLevel(LogLevel.DEBUG, new ConsoleAppender(new PlainTextFormatter()));
  LogHandlerConfig.addAppenderForLevel(LogLevel.INFO, new ConsoleAppender(new PlainTextFormatter()));
  LogHandlerConfig.addAppenderForLevel(LogLevel.WARN, new ConsoleAppender(new PlainTextFormatter()));
  LogHandlerConfig.addAppenderForLevel(LogLevel.WARN, new FileAppender(new JsonFormatter(), "warn.log"));
  LogHandlerConfig.addAppenderForLevel(LogLevel.ERROR, new ConsoleAppender(new PlainTextFormatter()));
  LogHandlerConfig.addAppenderForLevel(LogLevel.ERROR, new FileAppender(new PlainTextFormatter(), "error.log"));

  logger.debug("This is a debug message");
  logger.info("This is an info message");
  logger.warn("This is a warning message");
  logger.error("This is an error message");
})();
