import { Logger } from "./Logger";

(function () {
  const logger: Logger = Logger.getInstance();
  logger.log("Hello");
})();
