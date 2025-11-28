import { LegacyXmlService } from "./LegacyXmlService";
import { ModernJsonService } from "./ModernJsonService";
import { XmlServiceAdapter } from "./XmlServiceAdapter";

/**
    Reference: https://www.youtube.com/watch?v=E9FGsuLR5EQ&list=PLYPO3T7Sl63u7uLLpiKCMXnRjeFIhUAvk&index=18 (~16 mins)
    Its notes (Good & Short notes): https://nailyourinterview.org/interview-resources/low-level-design/structural-design-patterns/adapter
    
    Let's quickly go over the main players in this design pattern:
    1. Adapter is the middleman which translates the incompatible code into a format your system understands.
    2. Adaptee is existing/legacy/third-party code you're trying to use.
    3. Target Interface is the format or interface that your app wants everything to follow.

    When Should You Use the Adapter Pattern?
    1. You want to work with third-party APIs, but they have different method names or data formats.
    2. You're dealing with legacy code that you cannot change.
    3. You want to offer your system a unified interface so it's easier to maintain and update in the future.
 */

(function () {
  const legacyXmlService = new LegacyXmlService();
  const xmlServiceAdapter = new XmlServiceAdapter(legacyXmlService);
  console.log(xmlServiceAdapter.fetchUserData()); // {"name":"John","age":30}

  const modernJsonService = new ModernJsonService();
  console.log(modernJsonService.fetchUserData()); // {"name":"John","age":30}
})();
