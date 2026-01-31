import { Account } from "./model/Account";
import { ATM } from "./model/ATM";
import { Card } from "./model/Card";
import { ATMRepository } from "./repository/ATMRepository";
import { ATMMachine } from "./service/ATMMachine";

(function main() {
  const card = new Card("CARD123", "1234", new Account("ACC123", 4500));

  const atm1 = new ATM("ATM1", 1, 4, 10); // 1 x 2000, 4 x 500, 10 x 100 = 5000

  const atmRepository = new ATMRepository();
  atmRepository.save(atm1);

  const atmMachine1 = new ATMMachine(atmRepository, "ATM1");

  console.log(`\n ====== Withdraw 1000 ======`);
  atmMachine1.insertCard(card);
  atmMachine1.enterPin("1234");
  atmMachine1.selectOption("WITHDRAW");
  atmMachine1.dispenseCash(1000);

  console.log(`\n ====== Withdraw 1000 - Incorrect PIN ======`);
  atmMachine1.insertCard(card);
  atmMachine1.enterPin("123");
  atmMachine1.selectOption("WITHDRAW");
  atmMachine1.dispenseCash(1000);

  console.log(`\n ====== Withdraw 1410 ======`);
  atmMachine1.insertCard(card);
  atmMachine1.enterPin("1234");
  atmMachine1.selectOption("WITHDRAW");
  atmMachine1.dispenseCash(1410);

  console.log(`\n ====== Withdraw 3300 ======`);
  atmMachine1.insertCard(card);
  atmMachine1.enterPin("1234");
  atmMachine1.selectOption("WITHDRAW");
  atmMachine1.dispenseCash(3300);

  console.log(`\n ====== Withdraw 500 ======`);
  atmMachine1.insertCard(card);
  atmMachine1.enterPin("1234");
  atmMachine1.selectOption("WITHDRAW");
  atmMachine1.dispenseCash(500);

  console.log(`\n ====== Withdraw 1000 ======`);
  atmMachine1.insertCard(card);
  atmMachine1.enterPin("1234");
  atmMachine1.selectOption("WITHDRAW");
  atmMachine1.dispenseCash(1000);
})();
