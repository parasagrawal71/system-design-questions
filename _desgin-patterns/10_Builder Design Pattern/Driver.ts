import { Email } from "./Email";
import { EmailBuilder } from "./EmailBuilder";

/**
    Reference: https://www.youtube.com/watch?v=xmfhM2I-dtE (~15 mins)
    Its notes (Good & Short notes): https://nailyourinterview.org/interview-resources/low-level-design/creational-design-patterns/builder
    
    Common problems without Builder pattern:
    ---
    1. Passing null values: What if you don't want to set cc, bcc, or attachment? 
        Then you'll end up passing null values.
    2. Constructor Overload (Too Many Constructors): To avoid passing null, some
        developers create multiple constructors. This leads to Constructor 
        Explosion.

    The Better Way: Use Builder Design Pattern
    ---
    The Builder pattern solves all these problems:
    - No more nulls
    - No constructor explosion
    - Easy to read
    - Still keeps your object immutable
 */

(function main() {
  const emailBuilder = new EmailBuilder();
  const email: Email = emailBuilder
    .setTo("paras@gmail.com")
    .setSubject("Job Application")
    .setBody("Hi, ...")
    .setCC("user@gmail.com")
    .build();
  console.log(`email: `, email);
})();
