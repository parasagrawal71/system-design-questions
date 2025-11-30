import { BankFacade } from "./BankFacade";

/**
    Reference: https://www.youtube.com/watch?v=WiiX34m1JbQ&list=PLYPO3T7Sl63u7uLLpiKCMXnRjeFIhUAvk&index=15
    Its notes (Good & Short notes): https://nailyourinterview.org/interview-resources/low-level-design/structural-design-patterns/facade

    The Facade Design Pattern is a structural design pattern that helps 
    simplify complex systems. It gives users a single, easy-to-use interface 
    to interact with many parts working behind the scenes.

    Problem without Facade:
    1. Tight Coupling
        The main class (Main. java) is tightly connected to every small part 
        like Account, Security, Funds, and Notification. If any of these classes 
        change, you'll have to change the main code too.
    2. Code Duplication : What if you need this same withdrawal logic in 5 
        different places? You'll end up copying the same logic everywhere, which 
        makes your code harder to maintain.

    Solution with Facade:
    1. Hiding the complexity from the user.
    2. Giving a simple method to call, like bank.withdraw(...).
    Use the Facade Pattern when:
    - You have a complex system with many parts.
    - You want to hide the internal steps from the client.
    - You want your code to be clean, maintainable, and easy to understand.
 */

(function main() {
  // Facade Pattern
  const bank: BankFacade = new BankFacade();
  bank.withdraw("ACC7654", 1000, "1234");
})();
