import { DebugLogProcessor } from "./DebugLogProcessor";
import { ErrorLogProcessor } from "./ErrorLogProcessor";
import { InfoLogProcessor } from "./InfoLogProcessor";
import { LogProcessor } from "./LogProcessor";

(function main() {
  const logger: LogProcessor = new InfoLogProcessor(new DebugLogProcessor(new ErrorLogProcessor(null)));

  logger.log(LogProcessor.ERROR, "Exception occured");
  logger.log(LogProcessor.DEBUG, "Need to debug this");
  logger.log(LogProcessor.INFO, "For Info");
})();
