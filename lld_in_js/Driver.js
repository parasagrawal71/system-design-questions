const rl = require("readline-sync");
const Manager = require("./Manager");

class Driver {
  constructor() {
    this.manager = new Manager();
  }

  main() {
    while (true) {
      console.log(`Choose an option`);
      console.log(`\t1. Add user`);
      console.log(`\t2. Print users`);
      const response = rl.question("Enter action number\n");
      if (response === "1") {
        const name = rl.question("Enter name\n");
        const email = rl.question("Enter email\n");
        this.manager.addUser(name, email);
      } else {
        this.manager.printUserList();
      }
      console.log("\n");
    }
  }
}

const driver = new Driver();
driver.main();
